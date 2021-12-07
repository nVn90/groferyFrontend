import React from "react";
import "./Checkout.css";
import "./Login.css";
import { Button } from "react-bootstrap";

function Checkout() {
  function closeForm() {
    document.getElementById("checkout").style.display = "none";
    document.body.overflowY = "scroll";
  }

  return (
    <div className="checkout" id="checkout">
      <div className="containerFluid">
        <div className="login__header">
          <h1 id="title1">Enter Your Address</h1>
        </div>
        <br />
        <div id="address" className="login__form">
          <form action="" autoComplete="off">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" placeholder="Full Name" name="name" />
            </div>
            <div className="form-group">
              <label htmlFor="mobile">Mobile</label>
              <input type="tel" placeholder="Mobile Number" name="mobile" />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                className="mb-3"
                placeholder="House/Flat"
                name="address"
              />
              <input
                className="mb-3"
                type="text"
                placeholder="Street, Locality"
                name="address"
              />
              <input
                className="mb-3"
                type="text"
                placeholder="Area, State"
                name="address"
              />
              <input
                className="mb-3"
                type="number"
                placeholder="Pin"
                name="address"
              />
            </div>
            <div className="form-group">
              <Button>Pay</Button>
            </div>
            <div className="form-group">
              <Button onClick={closeForm}>Cancel</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
