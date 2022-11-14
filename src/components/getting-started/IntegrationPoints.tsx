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
    image: "/assets/getting-started/nextjs.png",
    name: "NextJS",
    description: "Deployed on Vercel, or somewhere else",
    link: "/nextjs",
  },
  {
    image: "/assets/product/sdk.png",
    name: "React Native App",
    description: "For iPhone and Android",
    link: "/react-native",
  },
  {
    image: "/assets/product/extensions.png",
    name: "Other",
    description: "Anything else!",
    link: "/misc-integrations",
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