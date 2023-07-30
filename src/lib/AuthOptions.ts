import { JWT } from 'next-auth/jwt';
import type { NextAuthOptions, Session, User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {},
      async authorize(credentials) {
        try {
          const res = await fetch(`https://fake-api-admin-evanc.vercel.app/api/auth/login`, {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: { 'Content-Type': 'application/json' },
          });

          const { data } = await res.json();
          if (res.ok && data.access_token) {
            return data;
          } else {
            return null;
          }
        } catch (error: any) {
          throw new Error(error.message);
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/auth/login',
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === 'development',
  callbacks: {
    async jwt({ token, user }: { token: any; user: any }) {
      return { ...token, ...user };
    },
    async session({ session, token }: { session: Session; token: any }): Promise<Session> {
      session.user.name = token.name;
      session.user.image = token.avatar;
      session.user.accessToken = token.access_token;
      session.user.refreshToken = token.refresh_token;
      return session;
    },
  },
};
