import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"

export const { handlers:{ GET, POST }, auth, signIn, signOut } = NextAuth({ providers: [GoogleProvider({
    clientId:"339642451463-60aql446a4naignl2l49k71c1bvlkfh8.apps.googleusercontent.com",
    clientSecret:"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",

})]})
