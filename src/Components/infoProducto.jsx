import React, { useState } from "react";
//Importamos componentes 
import '../App.css';
import "../Product.css";
import { useLocation } from "react-router-dom";

function InfoProducto() {
    // const Producto = Home.find((product) => {
    //     return product.id === props.id
    // })
    const location = useLocation();
    // const { id = "defaultValue" } = location.state || {};
    const { title = "defaultValue" } = location.state || {};
    const { image = "defaultValue" } = location.state || {};
    const { price = "defaultValue" } = location.state || {};
    const { rating = "defaultValue" } = location.state || {};

    return (
        <div className="home">
            <div className="home__container">
                <div className="home__row">
                    <div className="product">
                        <div className="product__info">
                            <h1>{title}</h1>
                            <p className="product__price">
                                <small>$</small>
                                <strong>{price}</strong>
                            </p>
                            <div className="product__rating">
                                {Array(rating)
                                    .fill()
                                    .map((_, i) => (
                                        <p>🌟</p>
                                    ))}
                            </div>
                        </div>
                        <img src={image} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InfoProducto;