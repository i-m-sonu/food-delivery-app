import React from "react";
import { ListGroup } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartUiActions } from "../../../store/shopping-cart/cartUiSlice";
import CartItem from "./CartItem";
import "../../../styles/shopping-cart.css";

const Carts = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const navigate = useNavigate();

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  const handleCheckout = async (e) => {
    e.stopPropagation(); // Prevent toggling cart when clicking checkout
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ totalAmount }), // Send totalAmount as an object
      });
      console.log("Response status:", response.status);
      const responseData = await response.json();
      console.log("Response data:", responseData); // Log response data for debugging
      if (response.ok) {
        // Payment successful, redirect to checkout page
        alert("Payment successful");
        navigate("/checkout");
      } else {
        // Handle error
        console.error("Payment failed");
        alert("Payment failed");
      }

    } catch (error) {
      console.error("Error:", error.message); // Log specific error message
      console.error("Full error:", error); // Log entire error object for detailed information
      alert("Error during payment");
    }
    

  };
  

  return (
    <div className="cart__container">
      <ListGroup onClick={toggleCart} className="cart">
        <div className="cart__closeButton">
          <span onClick={toggleCart}>
            <i className="ri-close-fill"></i>
          </span>
        </div>

        <div className="cart__item-list">
          {cartProducts.length === 0 ? (
            <h6 className="text-center">No item added to the cart</h6>
          ) : (
            cartProducts.map((item, index) => (
              <CartItem item={item} key={index} onClose={toggleCart} />
            ))
          )}
        </div>

        <div className="cart__bottom d-flex align-items-center justify-content-between">
          <h6>
            Subtotal : <span>Rs. {totalAmount}</span>
          </h6>
          <button onClick={handleCheckout}>Checkout</button>
        </div>
      </ListGroup>
    </div>
  );
};

export default Carts;
