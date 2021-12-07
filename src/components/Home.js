import React, { useState, useEffect } from "react";
import "./Home.css";
import { db } from "../firebaseApp";
import { Container } from "@material-ui/core";
import { Button } from "react-bootstrap";
import Product from "./Product";
// import { Card } from "@material-ui/core";

function Home({ cart }) {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    await db.collection("products").onSnapshot(function (querySnapshot) {
      setProducts(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().ProductName,
          description: doc.data().ProductDescription,
          price: doc.data().ProductPrice,
          imageURL: doc.data().ProductImage,
        }))
      );
    });
  };

  const onAddToCart = async (productId, quantity, MRP) => {
    const docRef = db.collection("users").doc("Umesh").collection("Cart");
    const snapshot = await docRef.where("ProductID", "==", productId).get();
    if (snapshot.empty) {
      await docRef.add({
        ProductID: productId,
        quantity: quantity,
        TimeAdded: new Date(),
        ProductMRP: MRP,
        QuantityPrice: MRP * quantity,
      });
      return;
    }
    alert("Product already added to Cart.");
  };

  useEffect(() => {
    fetchProducts();
    console.log(products);
  }, []);

  return (
    <div className="home">
      <Container className="text-center">
        <div className="home__header d-flex justify-content-between">
          <h1>Top Savers</h1>
          <Button className="btn">See all</Button>{" "}
        </div>
        <div className="home__productContainer">
          <div className="home__productSectionOne">
            <Product
              img={"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,h=140/app/images/products/normal/pro_377774.jpg"} 
              title={"Sunfeast Yippee Magic Masala Magic Masala"} 
              discounted={2.99} 
              mrp={3.99}
              offer = {"2 x 240g"}
            />
            <Product
              img={"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,h=140/app/images/products/normal/pro_377774.jpg"} 
              title={"Sunfeast Yippee Magic Masala Magic Masala"} 
              discounted={2.99} 
              mrp={3.99}
              offer = {"2 x 240g"}
            />
            <Product
              img={"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,h=140/app/images/products/normal/pro_377774.jpg"} 
              title={"Sunfeast Yippee Magic Masala Magic Masala"} 
              discounted={2.99} 
              mrp={3.99}
              offer = {"2 x 240g"}
            />
            <Product
              img={"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,h=140/app/images/products/normal/pro_377774.jpg"} 
              title={"Sunfeast Yippee Magic Masala Magic Masala"} 
              discounted={2.99} 
              mrp={3.99}
              offer = {"2 x 240g"}
            />
            <Product
              img={"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,h=140/app/images/products/normal/pro_377774.jpg"} 
              title={"Sunfeast Yippee Magic Masala Magic Masala"} 
              discounted={2.99} 
              mrp={3.99}
              offer = {"2 x 240g"}
            />
            <Product
              img={"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,h=140/app/images/products/normal/pro_377774.jpg"} 
              title={"Sunfeast Yippee Magic Masala Magic Masala"} 
              discounted={2.99} 
              mrp={3.99}
              offer = {"2 x 240g"}
            />
            <Product
              img={"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,h=140/app/images/products/normal/pro_377774.jpg"} 
              title={"Sunfeast Yippee Magic Masala Magic Masala"} 
              discounted={2.99} 
              mrp={3.99}
              offer = {"2 x 240g"}
            />
            <Product
              img={"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,h=140/app/images/products/normal/pro_377774.jpg"} 
              title={"Sunfeast Yippee Magic Masala Magic Masala"} 
              discounted={2.99} 
              mrp={3.99}
              offer = {"2 x 240g"}
            />
           
            {/* {products.map((product) => {
              return <Product />
            })} */}
          </div>
        </div>
      </Container>
      {/* <div id="popUp" className="popUp">
        <Container>
          <Card>Hello</Card>
        </Container>
      </div> */}
    </div>
  );
}

export default Home;
