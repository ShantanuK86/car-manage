import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"
import  { SessionStrategy } from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
// import GoogleProvider from "next-auth/providers/google"


const prisma = new PrismaClient()
export const authOptions={
    adapter: PrismaAdapter(prisma),
    providers: [
    //   GoogleProvider({
    //     clientId: process.env.GOOGLE_CLIENT_ID!,
    //     clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    //   }),
      CredentialsProvider({
        name: "Credentials",
        credentials: {
          email: { label: "Email", type: "email" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials: any) {
          if (!credentials?.email || !credentials?.password) {
            throw new Error("Invalid credentials")
          }
  
          const user = await prisma.user.findUnique({
            where: {
              email: credentials.email
            }
          })
  
          if (!user || !user.password) {
            throw new Error("Invalid credentials")
          }
  
          const isCorrectPassword = await bcrypt.compare(
            credentials.password,
            user.password
          )
  
          if (!isCorrectPassword) {
            throw new Error("Invalid credentials")
          }
  
          return user
        }
      })
    ],
    session: {
        strategy: 'jwt' as SessionStrategy,
    },
    pages: {
      signIn: '/auth/signin',
      // signOut: '/auth/signout',
      // error: '/auth/error',
      // verifyRequest: '/auth/verify-request',
      // newUser: '/auth/new-user'
    },
    callbacks: {
      async jwt({ token, user }:any) {
        if (user) {
          token.id = user.id
        }
        return token
      },
      async session({ session, token }:any) {
        if (session.user) {
          session.user.id = token.id as string
        }
        return session
      }
    }
  }