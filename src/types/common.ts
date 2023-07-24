export type Response = {
  message: string;
  success: boolean;
};

export type Data = {
  id?: number | string | null;
  created_at?: string;
  created_by?: string;
  updated_at?: string;
  updated_by?: string;
};
