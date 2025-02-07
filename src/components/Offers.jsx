import React from 'react';
import './Offers.css';

const Offers = () => {
  return (
    <div className="offers-container">
      <h2>Choose a Plan</h2>
      <p>Get up to 10% discount annually</p>
      <div className="plans">
        <div className="plan">
          <h3>Developer</h3>
          <p>For New Developer</p>
          <div className="price">$30/Mo</div>
          <ul>
            <li>100B of Bandwidth</li>
            <li>Max 50 connection</li>
            <li>512MB RAM</li>
            <li>Unlimited access</li>
            <li>Unlimited User</li>
            <li>Data analytics</li>
          </ul>
          <button>CHOOSE</button>
        </div>
        <div className="plan">
          <h3>Developer</h3>
          <p>For New Developer</p>
          <div className="price">$60/Mo</div>
          <ul>
            <li>100B of Bandwidth</li>
            <li>Max 50 connection</li>
            <li>512MB RAM</li>
            <li>Unlimited access</li>
            <li>Unlimited User</li>
            <li>Data analytics</li>
          </ul>
          <button>CHOOSE</button>
        </div>
        <div className="plan">
          <h3>Developer</h3>
          <p>For New Developer</p>
          <div className="price">$160/Mo</div>
          <ul>
            <li>100B of Bandwidth</li>
            <li>Max 50 connection</li>
            <li>512MB RAM</li>
            <li>Unlimited access</li>
            <li>Unlimited User</li>
            <li>Data analytics</li>
          </ul>
          <button>CHOOSE</button>
        </div>
      </div>
    </div>
  );
};

export default Offers;
