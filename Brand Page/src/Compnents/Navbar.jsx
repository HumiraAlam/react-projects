import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div>
      <nav className="container" >
        <div className="brand-logo">
          <img src="/Asset/brand_logo.png" alt="brand logo" />
        </div>

        <div className="nav-items">
            <ul>
                <li>
                    <a href="#">MENU</a>
                </li>
                <li>
                    <a href="#">LOCATION</a>
                </li>
                <li>
                    <a href="#">ABOUT</a>
                </li>
                <li>
                    <a href="#">CONTACT</a>
                </li>
            </ul>
        </div>
        <button>Login</button>
      </nav>
    </div>
  );
}
