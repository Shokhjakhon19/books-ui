import React from "react";

import './awesomeFeatures.css'

const AwesomeFeatures = ({ item }) => {
  return (
    <div className="cardAwesomeFeatures">
      <div>
        <img src={item.img} alt="" />
      </div>
      <h1>{item.title}</h1>
    </div>
  );
};

export default AwesomeFeatures;
