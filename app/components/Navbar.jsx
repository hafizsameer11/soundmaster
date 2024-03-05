import Image from "next/image";
import React from "react";
import { FaSearch } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="menu flex  items-center justify-between">
      <div className="logo"></div>
      <div>
        <div className="search-form">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search Any Music" />
        </div>
      </div>
      <div className="action-button flex justify-between gap-3">
        <button className="primary-btn">Login</button>
        <button className="secondary-btn">Singup</button>
      </div>
    </div>
  );
}
