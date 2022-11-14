---
title: Sell your NextJS App
hide_title: true
displayed_sidebar: nextjs
---

Assuming you already have your access passes and plans setup on [Whop Dashboard](https://dash.whop.com), the below should be straightforward to implement. This is what allows you to properly grant customers purchasing from our marketplace access to your application.

Before you begin, make sure to add a redirect URL to your Whop Dashboard developer settings under the oauth section [in the same place you found your API keys](/getting-started/selling-software-projects). This is where customers will be sent after purchase.

For a better reference, feel free to look at **this branch** in one of our [example projects](https://github.com/whopio/whop-courses/tree/template).

### Custom Implementation

1. Set your redirect URL in Whop Dashboard to http://localhost:3000/auth/callback
2. Add a file called `callback.tsx` inside your pages/auth folder in your application
3. In this file, you should react to the param `code` which will be sent back with your user.
4. With this code, you can hit our API as referenced [here](https://dev.whop.com/v2.0/reference/oauth-implementation#complete-the-connection-and-get-the-user-token)

### Implementation using Next Auth

Below is an example implementation (if you are using [next-auth](https://next-auth.js.org/))

```jsx
export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  debug: true,
  providers: [
    {
      id: "whop",
      name: "Whop",
      type: "oauth",
      authorization: "https://whop.com/oauth",
      token: "https://data.whop.com/api/v3/oauth/token",
      userinfo: "https://data.whop.com/api/v2/me",
      clientId: "xxxxx",
      clientSecret: "xxxxx",
      profile(profile) {
        return {
          id: profile.id,
          name: profile.username,
          email: profile.email,
          image: profile.profile_pic_url,
        };
      },
    },
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account) {
        const { scope, access_token } = account;
      }

      return true;
    },
    async session({ user, session }) {
      session.user.id = user.id;
      return session;
    },
  },
};
```
