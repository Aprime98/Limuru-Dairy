import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { images } from "../../constants";
import { HiMenuAlt4 } from "react-icons/hi";
import { HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo} alt='logo' />
      </div>
      <ul className='app__navbar-links'>
        {["home", "products", "about", "contact", "feedMill"].map((item) => (
          <li className='p-para' key={`link-${item}`}>
            <div />
            <a href={`/${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            style={{ opacity: 0 }}
            whileInView={{ x: [300, 0], opacity: [0.9, 1] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "products", "about", "contact", "feedMill"].map(
                (item) => (
                  <li className='p-para' key={`link-${item}`}>
                    <a href={`/${item}`}>{item}</a>
                  </li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
