import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "@/lib/mongodb"

const handler = NextAuth({
    providers: [
        GoogleProvider({
          clientId: process.env.Google_ID as string,
          clientSecret: process.env.Google_SECRET as string,
        }),
        // ...add more providers here
      ],
      adapter: MongoDBAdapter(clientPromise)
})

export { handler as GET, handler as POST }