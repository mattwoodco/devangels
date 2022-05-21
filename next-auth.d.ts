import "next-auth/jwt"

// Read more at: https://next-auth.js.org/getting-started/typescript#module-augmentation

declare module "next-auth/jwt" {
  interface JWT {
    /** The user's role. */
    userRole?: "admin"
  }
}

declare module "next-auth" {
  interface Session {
    address: string
    // user: {
    //   username: string
    //   email?: string
    //   avatar_url?: string
    // }
  }
}
