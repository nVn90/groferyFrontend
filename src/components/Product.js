import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Product.css";

function Product({ product, onAddToCart, img, title, discounted, mrp, offer }) {
  // const btn = document.getElementsById("btn");
  // btn.addEventListener("click", changeInnerText);
  // function changeInnerText() {}

  return (
    <div className="product">
      <span className="product__offer">25%</span>
      <Link to="/productpage/#">
        <img
          src={img}
          alt=""
        />
      </Link>

      <div className="product__meta">
        <h6 className="product__title">
          {title}
        </h6>
        <h6 className="price">
          <span className="discounted">$ {discounted}</span>
          <span className="mrp text-muted">$ {mrp}</span>
        </h6>
        <div className="product__packOffer">{offer}</div>
      </div>
      <div className="product__quantity">
        <Button className="btn" id="btn" block>
          Add
        </Button>{" "}
      </div>
    </div>
  );
}

export default Product;
