import React from "react";
import "./style.scss";

export const Card = ({ items, colour, logo, className }) => {
  return (
    <div className={`card ${className}`} style={{ backgroundColor: colour }}>
      {logo ? (
        <div className="card-header">
          <div className="card-logo">
            <img src={logo} alt="logo" />
          </div>
        </div>
      ) : (
        <></>
      )}
      <div className="card-body">
        <div className="content-section">
          <img src={items?.logo} alt="" />
          <h2>{items?.title} </h2>
          <div className="line"></div>
          <p>{items?.desc}</p>
        </div>
        <div className="image-section">
          <img src={items?.image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Card;
