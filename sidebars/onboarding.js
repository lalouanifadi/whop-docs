/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  // But you can create a sidebar manually

  onboarding: [
    // === Top Section ===
    {
      type: "doc",
      label: "Home",
      id: "0 0 Home",
    },
    {
      type: "doc",
      label: "Platform Overview",
      id: "0 1 Platform Overview",
    },
    {
      type: "category",
      label: "Getting Started",
      collapsed: false,
      items: [
        {
          type: "autogenerated",
          dirName: "getting-started",
        },
      ],
    },
    // === Authentication ===
    {
      type: "link",
      label: "Oauth",
      href: "/oauth",
    },
    {
      type: "link",
      label: "API Keys",
      href: "/api-keys",
    },
    // === Payments ===

    {
      type: "link",
      label: "Access Passes",
      href: "/access-passes",
    },
    {
      type: "link",
      label: "Plans",
      href: "/plans",
    },
    {
      type: "link",
      label: "Checkout",
      href: "/checkout",
    },
    {
      type: "link",
      label: "Promo Codes",
      href: "/promo-codes",
    },

    // === Users API ===
    {
      type: "doc",
      label: "Memberships",
      id: "Memberships",
    },
    {
      type: "doc",
      label: "Engagement",
      id: "Engagement",
    },
    {
      type: "doc",
      label: "Member Information",
      id: "Member Information",
    },
    {
      type: "doc",
      label: "Payments",
      id: "Payments",
    },

    {
      type: "doc",
      label: "Notifications",
      id: "Notifications",
    },

    {
      type: "doc",
      label: "Emails",
      id: "Emails",
    },
    {
      type: "doc",
      label: "Experiences",
      id: "Experiences",
    },

    // // === Deploy Contracts ===
    // {
    //   type: "doc",
    //   label: "Release",
    //   id: "6 2 Releasing your contract",
    // },
    // {
    //   type: "doc",
    //   label: "Deploy",
    //   id: "6 3 Deploying your contract",
    // },
    // {
    //   type: "link",
    //   label: "Prebuilt Contracts",
    //   href: "/pre-built-contracts",
    // },

    // === Discoverability ===
    {
      type: "link",
      label: "Discoverability Requirements",
      href: "/discoverability-requirements",
    },
    // === Manage Projects ===
    {
      type: "link",
      label: "Dashboard",
      href: "/dashboard",
    },
    // === Bottom Section ===
    {
      type: "doc",
      label: "CLI",
      id: "6 CLI",
    },
    {
      type: "category",
      label: "Templates",
      collapsed: true,
      items: [
        {
          type: "autogenerated",
          dirName: "7 Starter Kits",
        },
      ],
    },

    {
      type: "link",
      label: "Guides",
      href: "https://whop.com/blog/",
    },
    {
      type: "category",
      label: "SDK References",
      className: "bottom-menu-group",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "link",
          label: "JavaScript / TypeScript",
          href: "/typescript",
        },
        {
          type: "link",
          label: "React",
          href: "/react",
        },
        {
          type: "link",
          label: "Storage",
          href: "/storage-sdk",
        },
        {
          type: "link",
          label: "Solana",
          href: "/solana-sdk",
        },
        {
          type: "link",
          label: "Python",
          href: "/python",
        },
        {
          type: "link",
          label: "Go",
          href: "/go",
        },
        {
          type: "link",
          label: "Solidity",
          href: "/contracts",
        },
      ],
    },
  ],

  buildContracts: [
    {
      type: "autogenerated",
      dirName: "4 Contracts SDK",
    },
  ],

  prebuiltContracts: [
    {
      type: "autogenerated",
      dirName: "1 Pre-Built Contracts",
    },
  ],

  sdk: [
    {
      type: "autogenerated",
      dirName: "3 Web3 SDK",
    },
  ],

  auth: [
    {
      type: "autogenerated",
      dirName: "5 Authenticate",
    },
  ],

  storage: [
    {
      type: "autogenerated",
      dirName: "6 Storage",
    },
  ],

  dashboard: [
    {
      type: "autogenerated",
      dirName: "2 Contract Dashboard",
    },
  ],

  solana: [
    {
      type: "autogenerated",
      dirName: "8 Solana",
    },
  ],

  "ui-components": [
    {
      type: "autogenerated",
      dirName: "3 UI Components",
    },
  ],
};

module.exports = sidebars;
