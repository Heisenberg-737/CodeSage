import NextAuth from "next-auth";
import { authOptions } from "codesage/server/auth";

export default NextAuth(authOptions);
