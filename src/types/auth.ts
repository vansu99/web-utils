export type LoginDataResponse = {
  accessToken: string;
  refreshToken: string;
};

export type LoginResponse = {
  success: boolean;
  data: LoginDataResponse;
};

export type ProfileTypes = {
  id: string;
  name: string;
  sex: 'male' | 'female';
  birthday: Date;
  role: 'admin' | 'staff';
};
