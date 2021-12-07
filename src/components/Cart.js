import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import "./Cart.css";

function openForm() {
  document.getElementById("checkout").style.display = "grid";
  document.body.overflowY = "none";
}

function Cart({ cartShow }) {
  const ShowCart = () => {
    if (cartShow === true) {
      document.getElementById("toChange").style.right = "0%";
    } else {
      document.getElementById("toChange").style.right = "-100%";
    }
  };

  useEffect(() => {
    ShowCart();
  }, [cartShow]);

  return (
    <div className="cart">
      <div id="toChange" className="cart__box">
        <div className="cart__header">
          <p className="cart__title">
            My Cart{" "}
            <span>
              <small>(2 items)</small>
            </span>
          </p>
        </div>
        <div className="cart__subTotal">
          <div className="cart__subTotalLineOne">
            <span className="text-muted">Sub Total</span>
            <span className="text-muted">$ 166</span>
          </div>
          <div className="cart__subTotalLineOne">
            <span className="text-muted">Delivery Charges</span>
            <span className="text-danger">+ $ 49</span>
          </div>
          <hr />
          <div className="cart__subTotalLineOne">
            <span className="text-muted">Your total savings</span>
            <span className="text-danger">$18 (9.78%) </span>
          </div>
          <Button onClick={openForm}>Checkout</Button>
        </div>
        <br />
        <div className="cart__itemTable">
          <div className="cart__itemImg">
            <img
              src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,h=140/app/images/products/normal/pro_377774.jpg"
              alt=""
            />
          </div>
          <div className="cart__itemDetails">
            <span className="product__offer">25%</span>
            <h6 className="product__title2">
              Sunfeast Yippee Magic Masala Magic Masala
            </h6>
            <div className="product__packOffer">2 x 240g</div>
            <div className="cart__itemAmount">
              <div className="cart__Quantity">
                <button onClick="increment()">-</button>
                <span id="item__Quantity">0</span>
                <button onClick="decrement()">+</button>
                <span>x</span>
                <span>₹839</span>
                <span className="strikeLine">₹1020</span>
              </div>
              <div className="cart__itemPrice text-danger">
                <span></span>₹839
              </div>
            </div>
          </div>
        </div>
        <Button className="m-2">Empty Cart</Button>
      </div>
    </div>
  );
}

export default Cart;
