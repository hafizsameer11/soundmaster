"use client"
import React from "react";
import SVGComponent from "./Svgcomponent";
import ScrollToTopButton from "./ScrollToTopButton";

export default function Footer() {
  return (
    <div className="footer flex items-center justify-between">
    <ScrollToTopButton />
      <div className="footer-logoo flex items-start">
     
        <p className="footer-slogan text-black text-[20px] ">SOUND MARKET</p>
      </div>

      <div className="">
        <ul className="menu-ul flex justify-between items-center ">
          <li className="ml-[20px]">
            <a href="#" className="text-black">
              Home
            </a>
          </li>
          <li className="ml-[20px]">
            <a href="#" className="text-black">
              About
            </a>
          </li>
          <li className="ml-[20px]">
            <a href="#" className="text-black">
              Music
            </a>
          </li>
          <li className="ml-[20px]">
            <a href="#" className="text-black">
              Credits
            </a>
          </li>
          <li className="ml-[20px]">
            <a href="#" className="text-black">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="social-icons">
        <ul>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="67.355"
              height="68.027"
              viewBox="0 0 67.355 68.027"
              fill="black"
            >
              <path
                d="M-1178.338-107.7h-60.16a3.667,3.667,0,0,0-3.7,3.728h0V-43.4a3.667,3.667,0,0,0,3.7,3.728h32.394V-66h-8.793V-76.249h8.793V-83.7a12.277,12.277,0,0,1,10.875-13.512h2.082c2.545,0,5.322.233,7.867.466v9.086h-5.322c-4.165,0-5.09,2.1-5.09,4.892v6.523h10.181L-1186.9-66h-8.793v26.326h17.122a3.667,3.667,0,0,0,3.7-3.728h0v-60.572a3.355,3.355,0,0,0-3.471-3.728Z"
                transform="translate(1242.2 107.7)"
              ></path>
            </svg>
          </li>
          <li>
            <svg
              width="67.564"
              height="68.027"
              viewBox="0 0 67.564 68.027"
              fill="black"
            >
              <path
                d="M-1200.418-101.643c9.024,0,10.181,0,13.652.233a19.718,19.718,0,0,1,6.247,1.165,11.219,11.219,0,0,1,6.479,6.523,20.1,20.1,0,0,1,1.157,6.29c.231,3.495.231,4.659.231,13.745s0,10.251-.231,13.745a20.094,20.094,0,0,1-1.157,6.29,11.219,11.219,0,0,1-6.479,6.523,19.722,19.722,0,0,1-6.247,1.165c-3.471.233-4.628.233-13.652.233s-10.181,0-13.652-.233a19.716,19.716,0,0,1-6.247-1.165,11.219,11.219,0,0,1-6.479-6.523,20.091,20.091,0,0,1-1.157-6.29c-.231-3.495-.231-4.659-.231-13.745s0-10.251.231-13.745a20.091,20.091,0,0,1,1.157-6.29,11.219,11.219,0,0,1,6.479-6.523,19.717,19.717,0,0,1,6.247-1.165c3.471-.233,4.628-.233,13.652-.233m0-6.057c-9.255,0-10.412,0-13.883.233a19.379,19.379,0,0,0-8.1,1.631,17.6,17.6,0,0,0-9.949,10.018,24.347,24.347,0,0,0-1.62,8.154c-.231,3.728-.231,4.892-.231,13.978s0,10.484.231,13.978a24.346,24.346,0,0,0,1.62,8.154,17.6,17.6,0,0,0,9.949,10.018,23.9,23.9,0,0,0,8.1,1.631c3.7.233,4.859.233,13.883.233,9.255,0,10.412,0,13.883-.233a23.894,23.894,0,0,0,8.1-1.631,17.605,17.605,0,0,0,9.95-10.018,24.346,24.346,0,0,0,1.619-8.154c.231-3.728.231-4.892.231-13.978s0-10.484-.231-13.978a24.355,24.355,0,0,0-1.619-8.154,17.605,17.605,0,0,0-9.95-10.018,23.9,23.9,0,0,0-8.1-1.631c-3.7-.233-4.859-.233-13.883-.233Z"
                transform="translate(1234.2 107.7)"
              ></path>
              <path
                d="M-1208.958-101.2A18.781,18.781,0,0,0-1227.7-82.226a18.781,18.781,0,0,0,18.742,18.974,18.78,18.78,0,0,0,18.742-18.974h0C-1190.447-92.767-1198.777-101.2-1208.958-101.2Zm0,31.154a12.024,12.024,0,0,1-12.032-12.181,12.024,12.024,0,0,1,12.032-12.181,12.024,12.024,0,0,1,12.032,12.181,12.173,12.173,0,0,1-12.032,12.181Z"
                transform="translate(1242.74 116.24)"
              ></path>
              <circle
                cx="3.702"
                cy="3.702"
                r="3.702"
                transform="translate(48.128 11.891)"
              ></circle>
            </svg>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="75.663"
              height="62.251"
              viewBox="0 0 75.663 62.251"
              fill="black"
            >
              <path
                d="M145.87,64.746c24.3.233,44.195-19.582,44.426-44.059v-2.8a32.845,32.845,0,0,0,7.867-8.159,36.841,36.841,0,0,1-9.024,2.564,15.942,15.942,0,0,0,6.942-8.625,30.251,30.251,0,0,1-9.95,3.73,15.483,15.483,0,0,0-26.378,14.22A44.413,44.413,0,0,1,127.59,5.3a15.7,15.7,0,0,0,4.859,20.981,14.054,14.054,0,0,1-6.942-1.865v.233A15.707,15.707,0,0,0,138,40.036a14.021,14.021,0,0,1-6.942.233,15.966,15.966,0,0,0,14.577,10.957,30.819,30.819,0,0,1-19.436,6.76,19.758,19.758,0,0,1-3.7-.233,43.014,43.014,0,0,0,23.37,6.994"
                transform="translate(-122.5 -2.497)"
              ></path>
            </svg>
          </li>
        </ul>
      </div>
    </div>
  );
}
