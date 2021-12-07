import { useState, useEffect } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Checkout from "./components/Checkout";
import ProductDetail from "./components/ProductDetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { db } from "./firebaseApp";

function App() {
  const [cartShow, setCartShow] = useState(false);

  const [cart, setCart] = useState([]);

  const fetchCart = async () => {
    await db
      .collection("users")
      .doc("Umesh")
      .collection("Cart")
      .onSnapshot(function (querySnapshot) {
        setCart(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            productId: doc.data().ProductID,
            time: doc.data().TimeAdded,
            quantity: doc.data().quantity,
            MRP: doc.data().ProductMRP,
            quantityPrice: doc.data().QuantityPrice,
          }))
        );
      });
  };

  const handleUpdateCartQty = async (productId, Newquantity, MRP) => {
    if (Newquantity < 1) {
      handleRemoveFromCart(productId);
      return;
    }
    db.collection("users")
      .doc("Umesh")
      .collection("Cart")
      .doc(productId)
      .update({
        quantity: Newquantity,
        QuantityPrice: parseInt(Newquantity) * parseInt(MRP),
      });
  };

  const handleRemoveFromCart = async (productId) => {
    await db
      .collection("users")
      .doc("Umesh")
      .collection("Cart")
      .doc(productId)
      .delete();
  };

  const handleEmptyCart = async () => {
    await db
      .collection("users")
      .doc("Umesh")
      .collection("Cart")
      .get()
      .then((res) => {
        res.forEach((doc) => {
          doc.ref.delete();
        });
      });
  };
  function showCart() {
    if (cartShow === true) {
      setCartShow(false);
    } else {
      setCartShow(true);
      document.body.overflowY = "hidden";
    }
  }

  useEffect(() => {
    fetchCart();
    console.log(cart);
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/productpage">
            <Header cartClick={showCart} />
            <Cart cartShow={cartShow} />
            <Checkout />

            <Login />
            <ProductDetail />
          </Route>

          <Route path="/">
            <Header cartClick={showCart} />
            <Cart cartShow={cartShow} />
            <Checkout />
            <Login />
            <Banner />
            <br />
            <br />
            <Home cart={cart} />
            {/* <ProductDetail /> */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
