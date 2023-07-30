export type Data = {
  id?: number | string | null;
  created_at?: string;
  created_by?: string;
  updated_at?: string;
  updated_by?: string;
};

export enum HttpStatusCode {
  Ok = 200,
  Created = 201,
  NotFound = 404,
  Forbidden = 403,
  BadRequest = 400,
  Unauthorized = 401,
  BadGateway = 502,
  InternalServerError = 500,
  UnprocessableEntity = 422,
}
