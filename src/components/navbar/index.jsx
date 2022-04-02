import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { useDispatch } from "react-redux";
import { burgerCounter } from "../../redux/actions";

import { GoThreeBars } from "react-icons/go";

import "./navbar.css";

const Navbar = () => {
  const [stickyClass, setStickyClass] = useState("");
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  const burgerMenu = () => {
    dispatch(burgerCounter(0));
    setCount(count + 1);
    console.log(count);
  };

  const stickNavbar = () => {
    let windowHeight = window.scrollY;
    if (windowHeight >= 80) {
      setStickyClass("stickyNav");
    } else {
      setStickyClass("");
    }
  };
  // function burgerMenu() {
  //   setCount(count + 1);
  //   if (count % 2 !== 0) {
  //     setBurger("Close");
  //   } else {
  //     setBurger("Open");
  //   }
  // }

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
  }, []);

  return (
    <>
      <div className={`navbar ${stickyClass}`}>
        <div className="container nav">
          <img
            className=""
            src={
              window.scrollY >= 80
                ? "https://templates.iqonic.design/booksto/intro/images/logo-two.png"
                : "https://templates.iqonic.design/booksto/intro/images/logo-full.png"
            }
            alt=""
          />
          <ul>
            <li>
              <NavLink className="navLink" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="navLink" to="/">
                Demos
              </NavLink>
            </li>
            <li>
              <NavLink className="navLink" to="/">
                Documentation
              </NavLink>
            </li>
            <li>
              <NavLink className="navLink" to="/">
                Features
              </NavLink>
            </li>
          </ul>
          <button className="purchase">Purchase Now</button>
          <button className="burgerButton" onClick={() => burgerMenu(1)}>
            <GoThreeBars />
          </button>
        </div>
        {count % 2 !== 0 ? (
          <div className={"w-100 d-flex justify-content-center "}>
            <ul className={`burgerMenu container`}>
              <li>
                <NavLink className="navLink" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="navLink" to="/">
                  Demos
                </NavLink>
              </li>
              <li>
                <NavLink className="navLink" to="/">
                  Documentation
                </NavLink>
              </li>
              <li>
                <NavLink className="navLink" to="/">
                  Features
                </NavLink>
              </li>
            </ul>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};

export default Navbar;
