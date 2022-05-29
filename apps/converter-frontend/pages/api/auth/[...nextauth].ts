import NextAuth from 'next-auth'
import AzureADProvider from 'next-auth/providers/azure-ad'

export default NextAuth({
  providers: [
    // OAuth authentication providers...
    AzureADProvider({
      clientId: process.env.AZURE_ID!,
      clientSecret: process.env.AZURE_SECRET!,
      tenantId: process.env.AZURE_TENANT_ID!,
    }),
    // AppleProvider({
    //   clientId: process.env.APPLE_ID,
    //   clientSecret: process.env.APPLE_SECRET
    // }),
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_ID,
    //   clientSecret: process.env.FACEBOOK_SECRET
    // }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID,
    //   clientSecret: process.env.GOOGLE_SECRET
    // }),
    // // Passwordless / email sign in
    // EmailProvider({
    //   server: process.env.MAIL_SERVER,
    //   from: 'NextAuth.js <no-reply@example.com>'
    // }),
  ],
})
