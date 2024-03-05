"use client"
import React from "react";
import styles from "@/app/styles/topsection.module.css";
import Image from "next/image";
import { Tilt } from 'react-tilt'


export default function TopSection() {
  const defaultOptions = {
    reverse:        true,  // reverse the tilt direction
    max:            10,     // max tilt rotation (degrees)
    perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1,    // 2 = 200%, 1.5 = 150%, etc..
    speed:          1000,   // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,    // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  }
  return (
    <Tilt options={defaultOptions} >

    <div className={`${styles.topsection} top-section-box`}>
      <h2 className="white-heading-text text-center">SOUND MARKET</h2>
      <p className="text-white mt-[.2rem] text-center w-96 m-auto">
        Thousands Of Free Music Tracks For Content Creators Created by Award
        Winning Composers, Producers and Artists
      </p>
      <div></div>
      <div className="signup-form flex items-center">
      
      </div>
    </div>
    </Tilt>
  );
}
