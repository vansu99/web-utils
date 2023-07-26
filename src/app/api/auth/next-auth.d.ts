import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    access_token: string;
    refresh_token: string;
    user?: User;
  }

  interface User {
    id: string | number;
    email: string;
    avatar: string;
    first_name: string;
    last_name: string;
    sex: 'male' | 'female';
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    access_token: string;
    refresh_token: string;
  }
}
