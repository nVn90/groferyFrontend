import React from "react";
import "./Banner.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import { Container } from "@material-ui/core";

function Banner() {
  return (
    <div className="banner">
      <Container>
        <Carousel>
          <Carousel.Item>
            <img
              className="img-fluid"
              src="https://pub-static.haozhaopian.net/assets/projects/pages/3d4d74c0-f53c-11e9-9514-3f31cfb386e6_12ddd30c-5a94-4145-9034-5c6b0a462df2_thumb.jpg"
              alt="First slide"
            />
            {/* <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="img-fluid"
              src="https://cdn.shopify.com/s/files/1/0401/9889/7826/files/Samall_Banner-1_875x405.jpg?v=1591364550"
              alt="Second slide"
            />

            {/* <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="img-fluid"
              src="https://kitchensneed.in/wp-content/uploads/2019/10/banner-4.jpg"
              alt="Third slide"
            />

            {/* <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
}

export default Banner;
