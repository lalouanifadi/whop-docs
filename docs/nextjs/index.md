---
title: NextJS Getting Started
hide_title: true
displayed_sidebar: nextjs
---

<p align="center">
<br />
<a href="https://thirdweb.com"><img src="/assets/getting-started/nextjs.png" width="200" alt=""/></a>
<br />
</p>
<h1 align="center">NextJS Guide</h1>
<p align="center">
<a href="https://discord.gg/whop-discord"><img alt="Join our Discord!" src="https://img.shields.io/discord/834227967404146718.svg?color=7289da&label=discord&logo=discord&style=flat"/></a>

</p>
<p align="center"><strong>Easy setup for NextJS apps</strong></p>
<br />

## Installation

Install the latest version of the SDK with either `npm` or `yarn`:

```shell
npm install @whop/coming-soon
```

```shell
yarn add @whop/coming-soon
```

## Quick Start

Once you have the Whop SDK installed, you are good to go.

Here's a simple example using the SDK to xxx:

```jsx
import { WhopSDK } from "@whop/coming-soon";
```

<!--
Alternatively, we can use the SDK to upload and download metadata and JSON objects, and we can also upload multiple items at once:

```jsx
// We define metadata for 2 different NFTs
const metadata = [
  {
    name: "NFT #1",
    description: "This is my first NFT",
    image: readFileSync("path/to/file.jpg"),
    properties: {
      coolness: 100,
    },
  },
  {
    name: "NFT #2",
    description: "This is my second NFT",
    image: readFileSync("path/to/file.jpg"),
    properties: {
      coolness: 200,
    },
  },
];

// And now we can upload it all at once to a single directory
const uris = await storage.uploadBatch(metadata);

// And easily retrieve the metadata
const metadata = await storage.downloadJSON(uris);
```

## Learn More

You can learn more about thirdweb and the Storage SDK with the following resources:

- [Storage Docs](https://portal.thirdweb.com/storage)
- [Thirdweb Twitter](https://twitter.com/thirdweb_)
- [Thirdweb Discord](https://discord.com/invite/thirdweb) -->
