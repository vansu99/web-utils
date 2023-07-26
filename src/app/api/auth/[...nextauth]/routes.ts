import { JWT } from 'next-auth/jwt';
import NextAuth, { NextAuthOptions, Session, User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { getMe } from '@/apis/user';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {},
      async authorize(credentials) {
        try {
          const res = await fetch('https://fake-api-admin-evanc.vercel.app/api/auth/login', {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: { 'Content-Type': 'application/json' },
          });

          const {
            data: { access_token },
          } = await res.json();
          if (res.ok && access_token) {
            const user = await getMe(access_token);
            return user;
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
    async jwt({ token, user }: { token: JWT; user: User }) {
      if (user?.email) {
        return { ...token, ...user };
      }

      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }): Promise<Session> {
      const newSession = { ...session, ...token };
      return newSession;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
