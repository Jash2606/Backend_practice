import ReduxAddToCart from "../ReduxAddToCart/ReduxAddToCart";
// import "./ProductCard.css";
import React from 'react';


function ProductCard({ productData }) {
    return (
        <div className="product-card">
            <div className="product-details">
                <h2>
                    {productData.title}
                </h2>
                {/* <div className="product-image">
                    <img src={productData.images[0]} alt={productData.title} />
                </div> */}
            </div>

            <p>
                 {productData.price}
            </p>
            <ReduxAddToCart product={productData} />    
        </div>
    );
}

export default ProductCard;