import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: User;
  }

  interface User {
    id: string | number;
    email: string;
    avatar: string;
    name: string;
    gender: 'male' | 'female';
    accessToken: string;
    refreshToken: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    accessToken: string;
    refreshToken: string;
  }
}
