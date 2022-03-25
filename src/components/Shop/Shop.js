import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
        // Set for Products:
        const [products, setProducts] = useState([]);

        // Load Products from Data:
        useEffect(() => {
                fetch('products.json')
                        .then(res => res.json())
                        .then(data => setProducts(data))
        }, [])

        // Handle Add To Cart:
        const handleAddToCart = (product) => {
                console.log(product);
        }
        return (
                <div className="container-fluid row">
                        <div className="shop-container container col-md-9">

                                <div class="row row-cols-1 row-cols-md-3 g-4">
                                        {
                                                products.map(product => <Product
                                                        product={product}
                                                        key={product.id}
                                                        handleAddToCart={handleAddToCart}
                                                ></Product>)
                                        }
                                </div>

                        </div>
                        <div className="order col-md-3">
                                <h3>This is Order Summary</h3>
                        </div>
                </div>
        );
};

export default Shop;