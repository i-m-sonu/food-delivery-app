import React from "react";
import "../styles/treats.css";
const Treats = () => {
  return (
    <>
      <div className="tastes">
        <img className="img" src="https://food-delivery-ecommerce-app.netlify.app/static/media/network.7deb539d.png" alt="" />
        <div className="naf">
          <h1>
            What <span className="redd">customers</span> are having
          </h1>
          <p className="small">
          This food delivery app is a lifesaver!  Gone are the days of takeout menus and phone calls. Now, with just a few taps, I can browse countless restaurants, customize my order, and have it delivered hot and fresh.  Plus, tracking my food in real-time is a game-changer.  This app is convenient, user-friendly, and keeps my taste buds happy!
          {/* Forget the stress of cooking after a long day! This food delivery app has become my new best friend. I love the massive selection of restaurants, all conveniently located at my fingertips. From classic comfort food to exotic new flavors, there's something to satisfy every craving.  The app itself is simple and intuitive - browsing menus, customizing orders, and even paying are a breeze.  No more deciphering handwritten menus or dealing with busy phone lines. Plus, the real-time tracking feature puts me at ease, letting me know exactly when my food will arrive.  The best part? The delivery itself is always fast and reliable. My food arrives hot and fresh, just like it left the restaurant.  This app has revolutionized the way I eat, saving me time and effort while offering endless delicious possibilities. It's a win-win for busy people who love good food! */}
            
          </p>
          </div>
      </div>
    </>
  );
};

export default Treats;
