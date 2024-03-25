import React from 'react';
import '../styles/new.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='redd'>What we serve <br /></h1>
        <p className="naam"><br />Just sit back at home,<br /> we will <span className='redd'>take care</span></p>
      </header>
      <div className="services">
        <div className="service">
          <img src="./img.png" alt="" />
          <h2>Quick Delivery</h2>
          <p>Emphasize the speed and efficiency of your delivery service. Mention an estimated delivery time or timeframe.</p>
        </div>
        <div className="service">
          <img src="./im1.png" alt="" />
          <h2>Super Dine In</h2>
          <p>Promote the dine-in experience at your restaurant.
Mention any special features or benefits of dining in, such as a cozy ambiance, attentive service, or unique tableside preparations.</p>
        </div>
        <div className="service">
          <img src="./im2.png" alt="" />
          <h2>Easy Pick Up</h2>
          <p>Highlight the convenience of your pick-up option.
Mention how easy it is to order online or by phone and pick up their food quickly.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
