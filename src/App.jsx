import React from "react";
import ProductCard from "./Components/ProductCard";
import "./index.css";

function App() {
  const products = [
    {
      title: "Gaming Laptop",
      price: "$1200",
      description: "High performance laptop with RTX 3060 and 16GB RAM.",
      image:
        "https://media.istockphoto.com/id/671016804/photo/young-gamer-playing-video-game-wearing-headphone.jpg?s=2048x2048&w=is&k=20&c=JMwoE9CkzzOvGqkWxCaLLaJ1c9RwzxGSeDpp_1EmzbI=",
      button: "Shop Now",
    },
    {
      title: "Wireless Headphones",
      price: "$120",
      description: "Noise cancelling headphones with 30-hour battery life.",
      image:
        "https://cdn.pixabay.com/photo/2017/03/05/14/19/headphone-2118725_960_720.jpg",
      button: "Buy Now",
    },
    {
      title: "Smartphone",
      price: "$699",
      description: "Latest model with 5G and triple camera system.",
      image:
        "https://cdn.pixabay.com/photo/2014/08/05/10/27/iphone-410311_960_720.jpg",
      button: "Get Offer",
    },
    {
      title: "Smart Watch",
      price: "$199",
      description: "Track your fitness and stay connected.",
      image:
        "https://cdn.pixabay.com/photo/2015/06/25/17/21/smart-watch-821557_960_720.jpg",
      button: "Buy Now",
    },
    {
      title: "Tablet",
      price: "$329",
      description: "Perfect for entertainment and productivity.",
      image:
        "https://cdn.pixabay.com/photo/2015/06/24/15/45/hands-820272_960_720.jpg",
      button: "Shop Now",
    },
    {
      title: "Camera",
      price: "$499",
      description: "Capture moments with stunning clarity.",
      image:
        "https://cdn.pixabay.com/photo/2014/08/29/14/53/camera-431119_960_720.jpg",
      button: "Buy Now",
    },
  ];

  return (
    <div className="app">
      <h1>Our Products</h1>
      <div className="product-container">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            price={product.price}
            description={product.description}
            image={product.image}
          >
            {product.button}
          </ProductCard>
        ))}
      </div>
    </div>
  );
}

export default App;