import { query as q } from 'faunadb';

import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

import { fauna } from '../../../services/fauna';

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  jwt: {
    secret: process.env.SIGNING_KEY,
  },
  callbacks: {
    async signIn({ user }) {
      try {
        await fauna.query(
          q.Create(
            q.Collection('users'),
            { data: { email: user.email } },
          ),
        );

        return true;
      } catch {
        return false;
      }
    },
  },
});