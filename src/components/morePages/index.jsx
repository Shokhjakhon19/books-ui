import React from "react";
import { Link } from "react-router-dom";

import "./morePages.css";

const MorePages = ({ item }) => {
  return (
    <div className="cardMorePage">
      <h5>{item.title}</h5>
      <div className="morePageLink">
        <Link to="/">Html</Link>
        <Link to="/">Rtl</Link>
        <Link to="/">Dark</Link>
        <Link to="/">Vue</Link>
      </div>
      <div className="morePageCardImg">
        <Link to="/">
          <img src={item.img} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default MorePages;
