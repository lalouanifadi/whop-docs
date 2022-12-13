// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/vsLight");
const darkCodeTheme = require("prism-react-renderer/themes/oceanicNext");

const npm2yarn = require("@docusaurus/remark-plugin-npm2yarn");
const disableCachePlugin = require("./plugins/disable-cache-plugin");
const path = require("path");

const baseUrl = process.env.BASE_URL || "/";

//@ts-check
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Whop Developer Portal",
  tagline: "Get started with Whop by diving into our developer portal.",
  url: "https://dev.whop.com",
  baseUrl,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "whopio", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
  trailingSlash: false,
  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve("swc-loader"),
      options: {
        jsc: {
          parser: {
            syntax: "typescript",
            tsx: true,
          },
          target: "es2017",
        },
        module: {
          type: isServer ? "commonjs" : "es6",
        },
      },
    }),
  },
  baseUrlIssueBanner: true,
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars/onboarding.js"),
          id: "onboarding",
          path: "docs/onboarding",
          routeBasePath: "/",
          remarkPlugins: [[npm2yarn, { sync: true }]],
          sidebarCollapsed: false,
          editUrl: "https://github.com/whopio/whop-docs/edit/master",
        },
        sitemap: {
          changefreq: "daily",
        },
        theme: {
          customCss: [require.resolve("./src/scss/custom.scss")],
        },
      }),
    ],
  ],
  plugins: [
    disableCachePlugin,
    [
      "ideal-image",
      /** @type {import('@docusaurus/plugin-ideal-image').PluginOptions} */
      ({
        quality: 70,
        max: 1030,
        min: 640,
        steps: 2,
        // Use false to debug, but it incurs huge perf costs
        disableInDev: true,
      }),
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "typescript",
        path: "docs/typescript",
        routeBasePath: "typescript",
        sidebarPath: require.resolve("./sidebars/typescript.js"),
        remarkPlugins: [[npm2yarn, { sync: true }]],
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "react",
        path: "docs/react",
        routeBasePath: "react",
        sidebarPath: require.resolve("./sidebars/react.js"),
        remarkPlugins: [[npm2yarn, { sync: true }]],
        // ... other options
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "nextjs",
        path: "docs/nextjs",
        routeBasePath: "nextjs",
        sidebarPath: require.resolve("./sidebars/nextjs.js"),
        remarkPlugins: [[npm2yarn, { sync: true }]],
        // ... other options
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "solana",
        path: "docs/solana",
        routeBasePath: "solana-sdk",
        sidebarPath: require.resolve("./sidebars/solana.js"),
        remarkPlugins: [[npm2yarn, { sync: true }]],
        // ... other options
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "contracts",
        path: "docs/contracts",
        routeBasePath: "contracts",
        sidebarPath: require.resolve("./sidebars/contracts.js"),
        remarkPlugins: [[npm2yarn, { sync: true }]],
        // ... other options
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "python",
        path: "docs/python",
        routeBasePath: "python",
        sidebarPath: require.resolve("./sidebars/python.js"),
        remarkPlugins: [[npm2yarn, { sync: true }]],
        editUrl: "https://github.com/whopio/whop-docs/edit/master",
        // ... other options
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "go",
        path: "docs/go",
        routeBasePath: "go",
        sidebarPath: require.resolve("./sidebars/go.js"),
        remarkPlugins: [[npm2yarn, { sync: true }]],
        editUrl: "https://github.com/whopio/whop-docs/edit/master",
        // ... other options
      },
    ],
    "posthog-docusaurus",
    "docusaurus-plugin-sass",
    [
      "docusaurus-plugin-module-alias",
      {
        alias: {
          "@components": path.resolve(__dirname, "./src/components/"),
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/portal.png",
  
      posthog: {
        apiKey: "phc_hKK4bo8cHZrKuAVXfXGpfNSLSJuucUnguAgt2j6dgSV",
        appUrl: "https://dash.whop.com", // optional
        enableInDevelopment: true, // optional
      },
      colorMode: {
        respectPrefersColorScheme: true,
        defaultMode: "dark",
        // This removes light mode
        disableSwitch: false,
      },
      navbar: {
        logo: {
          alt: "Whop Docs",
          src: "img/longlogo.png",
          href: "/",
          srcDark: "img/longlogodark.png",
        },
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "JavaScript / TypeScript",
                to: "/typescript",
              },
              {
                label: "React",
                to: "/react",
              },
              {
                label: "Contracts",
                to: "/contracts",
              },
              {
                label: "Go",
                to: "/go",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/whop-biz",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/whopio",
              },
              {
                label: "GitHub",
                href: "https://github.com/whopio/whop-docs",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Dashboard",
                href: "https://dash.whop.com",
              },
              {
                label: "Blog",
                href: "https://whop.com/blog",
              },
              {
                label: "Guides",
                href: "/guides",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Whop, Inc.`,
      },
      prism: {
        additionalLanguages: ["solidity"],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
