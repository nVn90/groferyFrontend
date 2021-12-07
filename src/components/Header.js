import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import { IconButton } from "@material-ui/core";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import HelpIcon from "@material-ui/icons/Help";
import { Button } from "react-bootstrap";
import logo from "../logo.png"

function Header({ cartClick }) {
  // const [loginShow, setLoginShow] = useState(false);

  var dropDownOn = false;
  async function showDropdown() {
    if (!dropDownOn) {
      document.getElementById("login__dropDown").style.display = "block";
      dropDownOn = true;
    } else {
      document.getElementById("login__dropDown").style.display = "none";
      dropDownOn = false;
    }
  }

  // function callLogin() {
  //   if (loginShow) {
  //     document.getElementById("login").style.display = "grid";
  //     document.body.style.overflowY = "hidden";
  //     setLoginShow(false);
  //   }
  //   else {
  //     document.getElementById("login").style.display = "none";
  //     document.body.style.overflowY = "scroll";
  //     setLoginShow(true);
  //   }
  // }

  function openLogin() {
    document.getElementById("login").style.display = "grid";
    document.body.overflowY = "hidden";
  }

  return (
    <div className="header">
      <Link to="/">
        <div className="header__logo">
          <img
            // src="https://www6.lunapic.com/editor/working/1638863320229531?8514233685"
            src={logo}
            alt=""
            width="50"
          />
        </div>
      </Link>

      <div className="header__search">
        <input
          placeholder="Search"
          className="header__searchInput"
          type="text"
        />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__optionBasket" onClick={showDropdown}>
          <div className="header__option">
            <span className="header__optionLineOne">My Account</span>
            <span className="header__optionLineTwo">Login/Sign Up</span>
          </div>
        </div>

        <div id="login__dropDown" className="header__loginDropdown">
          <div className="dropdown__menu">
            <div className="items">
              <Button className="mt-0" block size="lg" onClick={openLogin}>
                Login or Sign Up
              </Button>
            </div>
            <div className="items">
              {" "}
              <HelpIcon /> FAQs
            </div>
            <div className="items">
              {" "}
              <LocalOfferIcon /> Offers
            </div>
          </div>
        </div>
        <div className="header__option">
          <IconButton className="header__optionBasket" onClick={cartClick}>
            <ShoppingBasketIcon />
          </IconButton>
          {/* <span className="header__optionLineOne">My Cart</span> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
