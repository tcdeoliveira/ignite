import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { fauna } from "../../../Services/fauna"
import { query } from "faunadb"
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      authorization: {
        params: {
          scope: 'read:user,user:email'
        },        
      },      
    }),
    // ...add more providers here
  ],
  callbacks:{
    async signIn({ user, account, profile }){
      const {email} = user;
      try {
        await fauna.query(
          query.If(
            query.Not(
              query.Exists(
                query.Match(
                  query.Index('user_by_email'),
                  query.Casefold(user.email)                    
                )
              )
            ),
            query.Create(
              query.Collection('users'),
              {data: {email}}
            ),
            query.Get(
              query.Match(
                query.Index('user_by_email'),
                query.Casefold(user.email)
              )
            )
          ),
        )
        return true;        
      } catch (error) {
        console.error(error)
        return false;
      }
    }
  }
})