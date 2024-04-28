import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Pizzas from "../pages/Pizzas";
import PizzaDetails from "../pages/PizzaDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import SignUp from "../pages/Signup";
import Sucess from "../pages/Sucess";
import Cancel from "../pages/Cancel";

const Routers = () => {
  return (
    <Routes>
      
      <Route path="/" element={<Login />} />
      
    
      <Route path="/home" element={<Home />} />
      <Route path="/pizzas" element={<Pizzas />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/pizzas/:id" element={<PizzaDetails />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/sucess" element={<Sucess />} />
      <Route path="/cancel" element={<Cancel />} />

    </Routes>
  );
};

export default Routers;
