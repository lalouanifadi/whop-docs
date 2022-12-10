import React, { useState } from "react";
// @ts-ignore import the json github examples
import exampleRepos from "../../docs/example-repos.json";
import FeaturedExample from "../templates/components/FeaturedExample";
import TemplateCard from "../templates/components/TemplateCard";
import ExampleRepo from "../templates/types/ExampleRepo";
import AllTemplatesContainer from "./AllTemplatesContainer";

const solanaHub = exampleRepos.filter((t) => t.name === "solana-hub")[0];
const contractHub = exampleRepos.filter((t) => t.name === "contract-hub")[0];

export default function ExamplesContainer() {
  return (
    <>
      {/* Featured Example 1 */}
      <FeaturedExample
        id={contractHub.name}
        title="Next JS Template"
        description="Pre-boot your NextJS app and get out-of-the-box OAuth and membership-gating"
        image={{
          light: "/assets/ui-components.png",
          dark: "/assets/ui-components.png",
        }}
        links={{
          github: contractHub.html_url
        }}
        whichFirst={"image"}
      />
      {/* Featured Example (Solana TODO) */}
      {/* <FeaturedExample
        id={solanaHub.name}
        title="Solana Showcase"
        description="Discover the power of our Solana SDK by interacting with real programs and viewing code snippets."
        image={{
          light: "/assets/solana_tw.png",
          dark: "/assets/solana_tw.png",
        }}
        links={{
          github: solanaHub.html_url,
          demo: solanaHub.homepage,
        }}
        whichFirst={"text"}
      /> */}

    </>
  );
}
