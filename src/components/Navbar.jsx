import React, { useState } from "react";
import Button from "./Button";
import BrandName from "./BrandName";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import "../styles/components/Navbar.scss";
import { navbarAnimation } from "../utils/Animations";
import { Link } from "react-scroll/modules";

export default function Navbar() {
  const [toggleNavbar, setToggleNavbar] = useState(false);
  const navbarToggler = () => {
    setToggleNavbar(!toggleNavbar);
  };
  return (
    <motion.div
      className={`navbar ${toggleNavbar === true ? "active" : ""}`}
      variants={navbarAnimation}
      transition={{ delay: 0.1 }}
    >
      <div className="col">
        <BrandName />
        <div className="collapseble-button">
          {!toggleNavbar ? (
            <GiHamburgerMenu onClick={navbarToggler} />
          ) : (
            <MdClose onClick={navbarToggler} />
          )}
        </div>
      </div>
      <nav>
        <div className="links">
          <ul>
            <li style={{ cursor: "pointer" }}>
              <Link to="about" smooth={true} duration={100}>
                About
              </Link>
            </li>
            <li style={{ cursor: "pointer" }}>
              <Link smooth={true} duration={100} to="services">
                Services
              </Link>
            </li>

            <li style={{ cursor: "pointer" }}>
              <Link smooth={true} duration={100} to="testimonial">
                Testimonial
              </Link>
            </li>

            <li style={{ cursor: "pointer" }}>
              <Link smooth={true} duration={100} to="blog">
                Blog
              </Link>
            </li>
            <li>
              <Button content="Contact" />
            </li>
          </ul>
        </div>
      </nav>
    </motion.div>
  );
}
