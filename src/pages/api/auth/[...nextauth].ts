import NextAuth, { Session } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { fauna } from "../../../Services/fauna"
import { query as q } from "faunadb"
interface IUserSession {
  user:{
    email:string
  }
}
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
    async session({session}){
      try {
        const subscription = await fauna.query(
          q.Get(
            q.Intersection([
              q.Match(
                q.Index('sub_by_user_ref'),
                q.Select(
                  "ref",
                  q.Get(
                    q.Match(
                      q.Index('user_by_email'),
                      q.Casefold(session.user.email)
                    )
                  )
                )
              ),
              q.Match(
                q.Index('subscription_by_status'),
                "active"
              )
            ])
          )
        )       
        return {
          ...session,
          activeSubscription:subscription
        };
      } catch (error) {
       return session; 
      }      
    },
    async signIn({ user, account, profile }){
      const {email} = user;
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
              {data: {email}}
            ),
            q.Get(
              q.Match(
                q.Index('user_by_email'),
                q.Casefold(user.email)
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