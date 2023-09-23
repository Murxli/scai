import NextAuth,{NextAuthOptions} from "next-auth"
import  GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions:NextAuthOptions = {
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_ID as string,
          clientSecret: process.env.GOOGLE_SECRET as string,
        }),
        CredentialsProvider({
          name: "Credentials",
          credentials: {
            username: { label: "Username", type: "text", placeholder: "Your User Name" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials, req) {
            const user = { id: "1", name: "J Smith", email: "jsmith@example.com", password:"Mjbsv" }
            if (credentials?.username === user.name && credentials.password === user.password) {
              return user
            } else {
              return null
            }
          }
        })
      ],
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }