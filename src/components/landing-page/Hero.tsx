import React from "react";
import ThemedImage from "@theme/ThemedImage";

export default function Hero() {
  return (
    <>
      <div className="hero-container">
        <div className="hero-left">
          <h1 className="hero-left-title">
            Whop <br /> documentation
          </h1>
          <p className="hero-left-description">
            Welcome to the docs! Here you will find guides, references and
            resources that will help you build with Whop. Please be patient as
            we work to make our docs more complete. We forked this repo from our
            friends at ThirdWeb so some of their pages are still here! (They are
            the coolest company ever)
          </p>
        </div>

        <div className="hero-right">
          <div className="hero-right-image-container">
            <ThemedImage
              sources={{
                light: "/assets/preview.svg",
                dark: "/assets/preview.svg",
              }}
              className="hero-right-image"
              alt="thirdweb documentation hero image"
            />
          </div>
        </div>
      </div>

      <hr className="hero-divider" />
    </>
  );
}
