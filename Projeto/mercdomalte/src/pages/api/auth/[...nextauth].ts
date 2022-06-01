import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

import { query as q } from 'faunadb';
import { fauna } from '../../../services/fauna';
import { FaUnderline } from 'react-icons/fa';

export default NextAuth({
	// Configure one or more authentication providers
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_CLIENT_ID,
			clientSecret: process.env.GITHUB_CLIENT_SECRET,
			authorization: { params: { scope: 'user' } },
		}),
		// ...add more providers here
	],

/* 	jwt: {
		signingKey: process.env.NEXTAUTH_SECRET,
	}, */

	callbacks: {
		async signIn({ user, account, profile, email, credentials }) {
			const e_mail = user.email;

			try {

				await fauna.query(
					q.If(
						q.Not(
							q.Exists(
								q.Match(
									q.Index('user_by_email'),
									q.Casefold(user.email)
								)
							)
						),
						q.Create(
							q.Collection('users'), 
							{ data: { e_mail } }
						)
						q.Update
					)
					
				);
				return true;
			} catch {
				return false;
			}
		},
	},
});
