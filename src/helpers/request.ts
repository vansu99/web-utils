import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/AuthOptions';

type RequestCache = 'no-cache' | 'no-store' | 'force-cache';
type RequestMethod = 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE';

type ResponseBodyData<T> = {
  data: T;
  success: boolean;
  message: string;
};

type ResponseData<T> = T;

class RequestService {
  private refreshTokenRequest: Promise<string> | null;

  constructor() {
    this.refreshTokenRequest = null;
  }

  private async getToken() {
    const session = await getServerSession(authOptions);
    return session?.user.accessToken;
  }

  private async getRefreshToken() {
    const session = await getServerSession(authOptions);
    return session?.user.refreshToken;
  }

  private objectToURLSearchParams(obj: Record<string, any>): URLSearchParams {
    const params = new URLSearchParams();

    for (const key in obj) {
      if (Array.isArray(obj[key])) {
        obj[key].forEach((value: any) => {
          params.append(`${key}[]`, value);
        });
      } else {
        params.append(key, obj[key]);
      }
    }

    return params;
  }

  private async request<T>(
    method: RequestMethod,
    path: string,
    payload?: {
      query?: Record<string, any>;
      body?: Record<string, any>;
    },
    optionRequest?: RequestInit,
    cacheControl?: RequestCache
  ): Promise<ResponseData<T>> {
    let token = null;
    let refreshToken = null;

    token = await this.getToken();
    refreshToken = await this.getRefreshToken();

    const options: RequestInit = {
      method,
      headers: {
        'Content-type': 'application/json',
        ...(cacheControl && { cache: cacheControl }),
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      ...optionRequest,
    };

    if (payload) {
      if ('body' in payload) {
        options.body = JSON.stringify(payload.body);
      }
      if ('query' in payload) {
        const params = this.objectToURLSearchParams(payload.query!).toString();
        path = `${path}?${params}`;
      }
    }

    try {
      const response = await this.fetcher(`${process.env.NEXT_BASE_URL}${path}`, options);
      if (response.ok) {
        const responseData: ResponseBodyData<T> = await response.json();
        if (responseData?.success) {
          return responseData.data;
        } else {
          throw new Error(`${responseData?.message}`);
        }
      } else if (response.status === 401) {
        const url = response.url;
        const configHeaders = response.headers;
        // check if the token is expired and the url is not refresh-token
        if (response.status === 401 && url !== 'auth/refresh-token') {
          this.refreshTokenRequest = this.refreshTokenRequest
            ? this.refreshTokenRequest
            : this.fetchRefreshToken(refreshToken as string).finally(() => {
                setTimeout(() => {
                  this.refreshTokenRequest = null;
                }, 10000);
              });

          return this.refreshTokenRequest?.then((accessToken) => {
            return this.request<T>(method, path, payload, optionRequest, cacheControl);
          });
        } else {
          throw new Error('');
        }
      } else {
        // check case 422
        throw new Error('');
      }
    } catch (error: any) {
      return Promise.reject(error);
    }
  }

  private async fetcher(url: string, options: RequestInit, timeout = 10000): Promise<Response> {
    return Promise.race([
      fetch(url, options),
      new Promise<Response>((_, reject) => {
        setTimeout(() => reject(new Error('Request Timeout')), timeout);
      }),
    ]);
  }

  private async fetchRefreshToken(refreshToken: string): Promise<string> {
    if (refreshToken) {
      const response = await this.request('POST', 'auth/refresh-token', { body: { refreshToken } });
      return 'ssssssss';
    } else {
      return '';
    }
  }

  async get<T>(path: string, query?: Record<string, any>, cacheControl?: RequestCache): Promise<ResponseData<T>> {
    return this.request<T>('GET', path, { query }, undefined, cacheControl);
  }

  async post<T>(path: string, body?: Record<string, any>): Promise<ResponseData<T>> {
    return this.request<T>('POST', path, { body });
  }

  async put<T>(path: string, body?: Record<string, any>): Promise<ResponseData<T>> {
    return this.request<T>('PUT', path, { body });
  }

  async delete<T>(path: string, query?: Record<string, any>): Promise<ResponseData<T>> {
    return this.request<T>('DELETE', path, { query });
  }
}

const request = new RequestService();
export default request;

// How to use?

/**
  async function getOrder(id: string) {
    const res = await request.get<Order>(`/orders/${id}`);

    if (!res.ok) {
        throw new Error(`Failed to fetch order: ${id}`);
    }

    return res.body;
  }
*/
