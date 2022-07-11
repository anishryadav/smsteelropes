import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

import "./Navbar.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__nav">
      <div className="app__nav-logo">
        <a href="/">
          <LazyLoadImage
src="https://firebasestorage.googleapis.com/v0/b/smsr-f0102.appspot.com/o/about%2Fsmlogo1.webp?alt=media&token=8ade8d82-3206-4e0c-ba1a-94a58c48fdad"            alt="logo.png"
            style={ { height: "3rem", width: "3rem" } }
          />
        </a>
      </div>
      <div className="app__nav-links">
        <ul>
          <li className="app__flex">
            <NavLink exact activeClassName="active" to="/">
              Home
            </NavLink>
          </li>
          <li className="app__flex">
            <NavLink activeClassName="active" to={ "/about" }>
              About
            </NavLink>
          </li>
          <li className="app__flex">
            <NavLink activeClassName="active" to={ "/product" }>
              Product
            </NavLink>
          </li>
          <li className="app__flex">
            <NavLink activeClassName="active" to={ "/contact" }>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="app__nav-menu">
        <GiHamburgerMenu
          className="menu"
          fontSize={ 24 }
          onClick={ () => setToggleMenu(true) }
        />

        { toggleMenu && (
          <motion.div
            className="mobile-menu"
            scr="true"
            whileInView={ {
              x: [-300, 0]
            } }
            transition={ { duration: 0.3, ease: "easeInOut" } }
          >
            <CgClose
              className="close"
              onClick={ () => setToggleMenu(false) }
            />

            <ul className="app__nav-link">
              <li className="app__flex">
                <a href="/" className="nav-link">
                  Home
                </a>
              </li>
              <li className="app__flex">
                <a href="/about" className="nav-link">
                  About
                </a>
              </li>
              <li className="app__flex">
                <a href="/product" className="nav-link">
                  Product
                </a>
              </li>
              <li className="app__flex">
                <a href="/contact" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>
        ) }
      </div>
    </nav>
  );
};

export default Navbar;
