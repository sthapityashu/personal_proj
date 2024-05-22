import NextAuth from "next-auth";
import { authOptions } from "@/app/utils/auth";

// export const { signIn, signOut, auth } = NextAuth(authOptions);

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
