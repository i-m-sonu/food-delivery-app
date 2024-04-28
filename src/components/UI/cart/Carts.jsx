import React from "react";
import { ListGroup } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { cartUiActions } from "../../../store/shopping-cart/cartUiSlice";
import CartItem from "./CartItem";
import "../../../styles/shopping-cart.css";
import { loadStripe } from '@stripe/stripe-js';

const Carts = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  const handleCheckout = async () => {
    try {
      const response = await fetch("http://localhost:8080/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cartProducts, totalAmount }),
      });

      if (!response.ok) {
        throw new Error("Failed to initiate checkout. Server responded with status: " + response.status);
      }

      const responseData = await response.json();
      const { id: sessionId } = responseData;

      const stripe = await loadStripe("pk_test_51PAR0XSGBiTyUFoFI31jGV7NWzl3fSUSRD7DKlEUcJa9ydWgpBjEO2TklCdqMRL5g99OEAmoDuzliHu3OxUH0yqj00OCX1XOFG");

      const { error } = await stripe.redirectToCheckout({
        sessionId: sessionId,
      });

      if (error) {
        throw new Error(error.message);
      } else {
        // Redirect the user after successful checkout
        window.location.href = "/success"; // Replace "/success" with your desired success page URL
      }
    } catch (error) {
      console.error("Error during checkout:", error);
      alert("Error during payment: " + error.message);
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
