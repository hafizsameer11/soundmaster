import React from "react";
import styles from "@/app/styles/topsection.module.css";
import Image from "next/image";
export default function TopSection() {
  return (
    <div className={styles.topsection}>
      <h2 className="white-heading-text text-center">SOUND MARKET</h2>
      <p className="text-white mt-[.2rem] text-center  w-96 m-auto">
        Thousands Of Free Music Tracks For Content Creators Created by Award
        Winning Composers, Producers and Artists
      </p>
      <div></div>
      <div className="signup-form flex items-center">
        <form className="">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path
              fill="white"
              d="M9.96 0C6.62 0 3.91 2.71 3.91 6.04c0 1.41.49 2.7 1.29 3.72L0 14.97 1.03 16l5.21-5.21c1.03.81 2.32 1.29 3.73 1.29 3.33 0 6.04-2.71 6.04-6.04S13.29 0 9.96 0Zm0 10.64c-2.53 0-4.59-2.06-4.59-4.59s2.05-4.6 4.59-4.6 4.59 2.06 4.59 4.59-2.06 4.59-4.59 4.59Z"
            ></path>
          </svg>
          <input type="text" placeholder="Search for music..." />
          <button className="secondary-btn-no-hover">Search</button>
        </form>
      </div>
     
    </div>
  );
}
