import React, { useEffect, useState } from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import { Outlet } from "react-router-dom";

import "./layout.css";

const Layout = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    yourFunction();
  }, []);

  function yourFunction() {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }

  if (loading)
    return (
      <div className="loading">
          <img
            src="https://templates.iqonic.design/booksto/intro/images/loader.gif"
            alt=""
          />
      </div>
    );
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
