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
  private async getToken() {
    const session = await getServerSession(authOptions);
    return session?.user.accessToken;
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
    const token = await this.getToken();
    const options: RequestInit = {
      method,
      headers: {
        'Content-type': 'application/json',
      },
      ...optionRequest,
    };

    if (cacheControl) {
      options.cache = cacheControl;
    }

    if (token) {
      options.headers = {
        ...options.headers,
        Authorization: `Bearer ${token}`,
      };
    }

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
      const response = await fetch(`${process.env.NEXT_BASE_URL}${path}`, options);
      const responseData: ResponseBodyData<T> = await response.json();
      if (responseData?.success) {
        return responseData.data;
      } else {
        throw new Error(`${responseData?.message}`);
      }
    } catch (error: any) {
      return Promise.reject(error);
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
