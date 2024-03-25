import React from "react";
import "../styles/treat.css";
const Treat = () => {
  return (
    <>
      <div className="taste">
        <img className="img" src="https://food-delivery-ecommerce-app.netlify.app/static/media/location.c2a80861.png" alt="" />
        <div className="con">
          <h1>
            Why <span className="red"> Tasty Treat?</span>
          </h1>
          <p className="small">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            impedit repellendus veniam harum magni aperiam, aut nesciunt. Odit,
            eum qui.
          </p>
          <h5> 🍔 Fresh and tasty food</h5>
          <p className="small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, sit?</p>
          <h5> ✅ Quality support</h5>
          <p className="small">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, perferendis!</p>
          <h5> 📍 Order from any location</h5>
          <p className="small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, ex?</p>
        </div>
      </div>
    </>
  );
};

export default Treat;
