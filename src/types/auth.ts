export type LoginDataResponse = {
  accessToken: string;
  refreshToken: string;
};

export type LoginResponse = {
  success: boolean;
  data: LoginDataResponse;
};
