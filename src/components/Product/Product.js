import React from 'react';
import './Product.css';

const Product = (props) => {
        const { img, name, ratings, price, seller } = props.product;
        return (
                <div class="col">
                        <div class="card h-100">
                                <img src={img} class="card-img-top" alt="..." />
                                <div class="card-body">
                                        <h6 class="card-title">{name}</h6>
                                        <h6>Price: ${price}</h6>
                                        <p>
                                                <small>Seller: {seller}</small>
                                        </p>
                                        <p>
                                                <small>Ratings: {ratings} stars</small>
                                        </p>
                                </div>
                                <div onClick={() => props.handleAddToCart(props.product)} class="card-footer text-center button">
                                        <small class="">Add to Cart</small>
                                </div>
                        </div>
                </div>
        );
};

export default Product;