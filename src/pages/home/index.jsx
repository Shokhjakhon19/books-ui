import React from "react";

import "./home.css";

import HomeComponents from "../../assests/json/homeComponents.json";

import CardDemo from "../../components/cardDemo";
import MorePages from "../../components/morePages";
import AwesomeFeatures from "../../components/awesomeFeatures";

const Home = () => {
  const uniqueDashboard = HomeComponents.uniqueDashboard;
  const uniqueMorePages = HomeComponents.uniqueMorePages;
  const awesomeFeatures = HomeComponents.awesomeFeatures;
  return (
    <div>
      {/*  H E A D E R HTML codes */}
      <div className="homeSection_1">
        <img
          src="https://templates.iqonic.design/booksto/intro/images/logo-full.png"
          alt=""
        />
        <h1>
          Booksto - Minimal Ebook <br /> Admin & Shop Template
        </h1>
        {/*  B A C K G R O U N D HTML codes */}
        <video autoPlay muted playsinline loop>
          <source
            label="360p"
            src="https://ak.picdn.net/shutterstock/videos/1076015384/preview/stock-footage-the-enchanted-forest-of-the-magic-book-nature-landscape-loop-background.webm"
            type="video/webm"
          />
        </video>
      </div>
      <div>
        {/*  C A R O U S E L HTML codes */}
        <div className="carousel"></div>
        {/*  U N I Q U E - D A S H B O A R D HTML codes */}
        <div className="text-center container-fluid justify-content-center uniqueDashboard">
          <div>
            <h1>Unique Dashboard Demo</h1>
            <p>Booksto brings in new era for admin templates.</p>
          </div>
          <div className="demoCard">
            {uniqueDashboard.map((item, index) => (
              <CardDemo item={item} />
            ))}
          </div>
        </div>
        {/*  U N I Q U E - P A G E S HTML codes */}
        <div className="text-center container-fluid justify-content-center morePages">
          <div>
            <h1>Unique More Pages</h1>
            <p>Booksto admin comes with ready to use purposeful inner pages.</p>
          </div>
          <div className="morePagesCard">
            {uniqueMorePages.map((item, index) => (
              <MorePages item={item} />
            ))}
          </div>
        </div>
        {/*  A W E S O M E - F E A T U R E S HTML codes */}
        <div className="text-center container-fluid justify-content-center awesomeFeatures">
          <div>
            <h1>Awesome Features</h1>
          </div>
          <div className="container awesomeFeaturesCard">
            {awesomeFeatures.map((item, index) => (
              <AwesomeFeatures item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
