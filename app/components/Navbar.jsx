import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <div className="menu flex  items-center justify-between">
      <div className="logo">
        
      </div>
      <div className="">
        <ul className="menu-ul flex justify-between">
          <li className="ml-[20px]">
            <a href="#">Home</a>
          </li>
          <li className="ml-[20px]">
            <a href="#">About</a>
          </li>
          <li className="ml-[20px]">
            <a href="#">Music</a>
          </li>
          <li className="ml-[20px]">
            <a href="#">Credits</a>
          </li>
          <li className="ml-[20px]">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="action-button flex justify-between gap-3">
      <button className="primary-btn">Login</button>
      <button className="secondary-btn">Singup</button>

      </div>
    </div>
  );
}
