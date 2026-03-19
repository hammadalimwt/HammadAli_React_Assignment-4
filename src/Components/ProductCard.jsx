import React from "react";

const ProductCard = ({
  title = "Product Name",
  price = "$0",
  description = "No description available.",
  image = "https://via.placeholder.com/300x200",
  children = "Buy Now",
}) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h3 className="product-title">{title}</h3>
      <p className="product-price">Price: {price}</p>
      <p className="product-description">{description}</p>
      <button className="product-button">{children}</button>
    </div>
  );
};

export default ProductCard;