// import "./Product.css";
import React, { useEffect, useState } from "react";
import { ProductCard } from "../ProductCard";

function Products() {
    let [products, setProducts] = useState([]);

    useEffect(() => {
        let URL = "https://run.mocky.io/v3/0912a49d-ab8c-4aa2-9363-d1d21fd3f66a";
        fetch(URL)
        .then((response) => response.json()).then((data) => {
            setProducts(data);
            console.log(products);
        }).catch((error) => {
            console.error("Error fetching data: ", error);
        });
    }, []);
    
    return (
        <div>
            <h1>Products</h1>
            <ul className="products-list">
                {products.map((product, index) => (
                    <li key={index}>
                        <ProductCard key={index} product={product} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default React.memo(Products);

