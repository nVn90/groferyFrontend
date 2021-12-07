import { Container } from "@material-ui/core";
import { Carousel } from "react-bootstrap";
import React from "react";
import "./ProductDetail.css";

function ProductDetail() {
  return (
    <div className="productDetail">
      <Container className="productDetail__container">
        <div className="row">
          <div className="col-md-6">
            <Container>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="img-fluid"
                    src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2R1Y3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="img-fluid"
                    src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2R1Y3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="img-fluid"
                    src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2R1Y3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </Container>
          </div>
          <div className="col-md-6">
            <div className="product1">
              <span className="product__offer">25%</span>

              <div className="product__meta">
                <h6 className="product__title mt-5">
                  Sunfeast Yippee Magic Masala Magic Masala
                </h6>
                <h6 className="price">
                  <span className="discounted">$ 2.10</span>
                  <span className="mrp text-muted">$ 3.50</span>
                </h6>
                <div className="product__packOffer">2 x 240g</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ProductDetail;
