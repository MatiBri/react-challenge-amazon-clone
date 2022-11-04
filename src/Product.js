import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();


  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <Link to={{ pathname: `/Product/${id}`, state: { id: id, title: title, image: image, price: price, rating: rating } }}> <b>{title}</b></Link>
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

      {/* <Link to={`/product/${id}`}>
              <button className="product_mybutton">More Info</button>
      </Link> */}

      <button onClick={addToBasket}>Add to Basket</button>
    </div >
  );
}

export default Product;
