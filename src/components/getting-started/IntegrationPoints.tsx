import React from "react";
import ProductCard from "../landing-page/ProductCard";

type Product = {
  image: string;
  name: string;
  description: string;
  link: string;
};

const products: Product[] = [
  {
    name: "Quick Integration Guide",
    image: "/assets/getting-started/quick-integration.png",
    description: "Get started with Whop Webhooks in 15 minutes",
    link: "/getting-started/business-app",
  },
  {
    name: "Full Integration Guide",
    image: "/assets/getting-started/full-integration.png",
    description: "Take control with the full power of the Whop API",
    link: "/getting-started/business-app",
  },
  {
    image: "/assets/getting-started/nextjs.png",
    name: "NextJS Template App",
    description: "Ready to deploy in minutes, with the Whop SDK built-in",
    link: "/nextjs",
  },
];

export default function IntegrationPoints() {
  return (
    <div className="explore-products-container">
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
