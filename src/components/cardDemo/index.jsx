import React from "react";
import { Link } from "react-router-dom";

import "./cardDemo.css";

const CardDemo = ({ item }) => {
  return (
    <div className="cardDemo">
      <h5>{item.title}</h5>
      <div className="cardDemoLink">
        <Link to="/">Html</Link>
        <Link to="/">Rtl</Link>
        <Link to="/">Dark</Link>
        <Link to="/">Vue</Link>
      </div>
      <div className="demoCardImg">
        <Link to="/">
          <img src={item.img} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default CardDemo;
