export type ROUTE = {
  name: string;
  path: string;
};

export type PostType = {
  id: string | number;
  title: string;
  link: string;
  description: string;
  imageURL?: string;
  date: Date;
  meta?: {
    keywords?: string[];
    description?: string;
  };
};
