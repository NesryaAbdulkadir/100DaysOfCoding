import { Menu, X } from "lucide-react";
import React, { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="navBar">
      <h1 className="logo">logo</h1>
      <div className="menuItems">
        <ul className="navItems" id="bigScreen">
          <li>
            <a href="#" className="item">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="item">
              About
            </a>
          </li>
          <li>
            <a href="#" className="item">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#" className="item">
              Blog
            </a>
          </li>
        </ul>
        <button className="button">Contact us</button>
      </div>
      <div className="mobileMenu">
        {isOpen ? (
          <X onClick={() => setIsOpen(false)} />
        ) : (
          <Menu onClick={() => setIsOpen(true)} />
        )}
        {isOpen && (
          <ul className="navItems" id="mobile">
            <li>
              <a href="#" className="item">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="item">
                About
              </a>
            </li>
            <li>
              <a href="#" className="item">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="item">
                Blog
              </a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}