import "./Hero.css";
import React from "react";

export default function Hero() {
  return (
    <div className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p className="hero-content-paragraph">
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-button">
          <button className="hero-button-primary">Shop Now</button>
          <button className="hero-button-secondary">Category</button>
        </div>
        <div className="shopping">
          <p className="shopping-paragraph">Also Available on</p>
          <div className="brand-icons">
            <img src="/Asset/flipkart.png" alt="flipkart" />
            <img src="/Asset/amazon.png" alt="amazon" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/Asset/shoe_image.png" alt="hero-image" />
      </div>
      
    </div>
  );
}
