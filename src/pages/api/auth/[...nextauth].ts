import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
    providers: [
        CredentialsProvider({
            id: "credentials",
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: "my-project",
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                email: {
                    label: "email",
                    type: "email",
                    placeholder: "jsmith@example.com",
                },
                password: { label: "Password", type: "password" },
                // tenantKey: {
                //   label: "Tenant Key",
                //   type: "text",
                // },
            },
            async authorize(credentials, _req) {
                const payload = {
                    email: credentials?.email,
                    password: credentials?.password,
                };

                const resx = await fetch(`https://blogserver123.herokuapp.com/graphql`, {
                    method: "POST",
                    body: JSON.stringify({
                        query: "mutation Login($email: String! $password: String!) { login(email: $email password: $password) { access_token user { email name id } refresh_token } }",
                        variables: payload,
                    }),
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept-Language": "en-US",
                    },
                });
                console.log(`{ "email": ${payload.email},"password": ${payload.password}}`);
                const user = await resx.json();
                console.log(user.data.login.access_token);
                console.log(user.data);

                if (!resx.ok) {
                    throw new Error(user.message);
                }
                // if (user.user.usertype !== "ADM") {
                //     console.log(user.user.usertype);
                //     throw new Error(user.message);
                // }

                // If no error and we have user data, return it
                if (resx.ok && user.data.login.access_token) {
                    return user;
                }

                // Return null if user data could not be retrieved
                return null;
            },
        }),
        // ...add more providers here
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.JWT_SECRET,
    pages: {
        error: "/auth/login",
        signIn: "/auth/login",
    },
    callbacks: {
        async jwt({ token, user, account }) {
            user && (token.user = user);
            if (account && user) {
                return {
                    ...token,
                    // @ts-ignore
                    accessToken: user.data.login.access_token,
                    // @ts-ignore
                    refreshToken: user.data.login.refresh_token,
                };
            }

            return token;
        },

        async session({ session, token }) {
            // @ts-ignore
            // console.log(token.user);
            session.accessToken = token.accessToken;
            session.refreshToken = token.refreshToken;
            // @ts-ignore
            session = token.user;
            // session?.user?.accessTokenExpires = token.accessTokenExpires;

            return session;
        },
    },
    theme: {
        colorScheme: "auto", // "auto" | "dark" | "light"
        brandColor: "", // Hex color code #33FF5D
        logo: "/vercel.svg", // Absolute URL to image
    },
    // Enable debug messages in the console if you are having problems
    debug: process.env.NODE_ENV === "development",
});
