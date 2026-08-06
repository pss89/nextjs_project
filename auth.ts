import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "이메일", type: "email", placeholder: "user@example.com" },
        password: { label: "비밀번호", type: "password" }
      },
      async authorize(credentials) {
        // 테스트를 위한 간단한 인증 로직입니다. 실제로는 데이터베이스나 외부 인증 서비스를 사용해야 합니다.
        if (credentials?.username === "admin@test.com" && credentials?.password === "1234") {
          return { id: "1", name: "관리자강사님", email: "admin@test.com" };
        }
        return null;
      }
    })
  ],
})