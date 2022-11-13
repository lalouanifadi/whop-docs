import React from "react";
import ProductCard from "./ProductCard";

type Product = {
  image: string;
  name: string;
  description: string;
  link: string;
};

const products: Product[] = [
  {
    image: "/assets/product/contracts.png",
    name: "Prebuilt Templates",
    description: "Prebuilt templates",
    link: "/pre-built-contracts",
  },
  {
    image: "/assets/product/sdk.png",
    name: "SDK",
    description:
      "Components and hooks to integrate smart contracts into your apps",
    link: "/sdk",
  },
  {
    image: "/assets/product/extensions.png",
    name: "Guides",
    description: "Build and extend smart contracts using our Solidity SDK",
    link: "/contractkit",
  },
  {
    image: "/assets/product/release.png",
    name: "Release",
    description: "Publish your contracts to our on-chain contract registry",
    link: "/release",
  },
  {
    image: "/assets/product/deploy.png",
    name: "Deploy",
    description: "A seamless contract deployment framework",
    link: "/deploy",
  },
  {
    image: "/assets/product/auth.png",
    name: "Auth",
    description: "Easily integrate wallet-based login flows",
    link: "/auth",
  },
  {
    image: "/assets/product/ui.png",
    name: "UI Components",
    description:
      "Plug and play UI components to easily add web3 functionality to your apps",
    link: "/ui-components",
  },
  {
    image: "/assets/product/storage.png",
    name: "Storage",
    description: "Store off-chain data using decentralized storage systems",
    link: "/storage",
  },
  {
    image: "/assets/product/dashboard.png",
    name: "Dashboard",
    description: "Easily analyze and manage your smart contracts",
    link: "/dashboard",
  },
];

export default function ExploreProductsSection() {
  return (
    <div className="explore-products-container">
      <h2 className="explore-products-heading" style={{ marginBottom: 12 }}>
        Explore Products
      </h2>

      <div className="row" style={{ marginBottom: 64 }}>
        {products.map((p, i) => (
          <div className="col col--4" key={i} style={{ padding: 8 }}>
            <ProductCard
              image={p.image}
              name={p.name}
              description={p.description}
              link={p.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
