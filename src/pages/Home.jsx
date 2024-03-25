import React from "react";
import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col } from "reactstrap";
 
import { Link } from "react-router-dom";
import New from "./New.jsx";
import guyImg from "../assets/images/delivery-guy.png";
import "../styles/hero-section.css";
import MediaCard from "./Cardname.jsx";
import Footer from "./Footer.jsx";
import Treat from "./Treat.jsx";
import Treats from "./Treats.jsx";

import CartItem from "../components/UI/cart/CartItem.jsx";
import Cart from "./Cart.jsx";
import PizzaDetails from "./PizzaDetails.jsx";
import Pizzas from "./Pizzas.jsx";

const Home = () => {
  return (
    <>
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 className="mb-3">Easy order & fast delivery</h5>
                <h1 className="mb-4 hero__title">
                  <span>Delight Delivered:</span> Satisfy Your Cravings, From
                  Our Door to Yours!
                </h1>
                <p>
                  Welcome to Foodi, where flavor meets convenience! Whether
                  you're craving a savory meal or a sweet treat, we've got you
                  covered. Browse our extensive menu featuring a variety of
                  mouthwatering dishes crafted with the freshest ingredients.
                  From hearty classics to exotic delights, there's something for
                  everyone.
                </p>

                <button className="order__btn d-flex align-items-center justify-content-between ">
                  <Link to="/pizzas">
                    Order Now <i className="ri-arrow-right-s-line"></i>
                  </Link>
                </button>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={guyImg} alt="delivery-guy" className="w-100" />
              </div>
            </Col>

            <div className="flex">
              <MediaCard
                title="Fast Food"
                description="Fast food is loved for its convenience, delicious flavors, and quick service. It offers a wide variety of options such as burgers, fries, pizza, and more, satisfying cravings with tasty treats. Enjoyed in moderation, it can be a fun and enjoyable dining experience for those looking for a quick and easy meal."
                image="https://i.pinimg.com/736x/83/56/48/83564831f3b00d9b83739cc48b3deddc.jpg"
              />
              <MediaCard
                title="Pizza"
                description=" Pizza is a beloved dish enjoyed worldwide for its delicious combination of flavors and versatility. With a crispy crust, savory sauce, gooey cheese, and endless topping options, it caters to diverse tastes. Whether classic margherita or loaded with toppings, pizza brings people together for a shared dining experience filled with joy and satisfaction."
                image="./fo.jpg"
              />
              <MediaCard
                title="Burger"
                description="Burgers are a universally loved food item known for their juicy patties, fresh toppings, and soft buns. Whether it's a classic cheeseburger, a gourmet creation, or a plant-based alternative, burgers offer a satisfying and flavorful meal experience. Perfect for a quick bite or a leisurely meal, burgers are a delicious treat enjoyed by many."
                image="https://img.freepik.com/premium-vector/delicious-burger-icon-food-beverages_22052-1.jpg"
                />
            </div>
              
          </Row>
        </Container>
      </section>
    </Helmet>
    <New/>
    <Treat/>
    <h1 className="cen">Hot Pizza</h1>
    <Pizzas/>
    <Treats/>

    {/* <Footer></Footer> */}
      </>
  );
};

export default Home;
