import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";
import storage from '../../../../backend/index';

const Item = (props) => {
  return (
    <div className="item">
      {/* <img src="https://backend-vtav.onrender.com/images/product_1744692736461.png" alt="img" /> */}
      {/* <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src="https://backend-vtav.onrender.com/images/" alt="Nothing..." /></Link> */}
      <Link to={`/product/${props.id}`}>
        <img
          onClick={window.scrollTo(0, 0)}
          src={`https://backend-vtav.onrender.com/images/${storage.filename}`}
          alt="Product"
        />
      </Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">₹{props.new_price}</div>
        <div className="item-price-old">₹{props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
