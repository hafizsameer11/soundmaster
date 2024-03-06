"use client";
import Image from "next/image";
import React, { useState } from "react";
import cody from "../../public/imagess/cody-martin-opt.jpg";
import tweenysomething from "../../public/imagess/tweenysomething-01.png";
import DanielMusto from "../../public/imagess/daniele-musto-opt.jpg";
import tyme from "../../public/imagess/tayme-opt.jpg";
import DrDelight from "../../public/imagess/dr-delight-opt.jpg";
import gridkids from "../../public/imagess/gridkids-opt.jpg";
import CodyMartin from "../../public/imagess/cody-martin-opt.jpg";

export default function TrendingSound() {
  const songs = [
    {
      name: "Tweeny something",
      artisits: "Daniel Musto",
      img: DanielMusto,
      count: "2:44",
      tags: " Fun , Happy , Hopeful",
    },
    {
      name: "Magic ",
      artisits: "TAYME",
      img: tyme,
      count: "3:20",
      tags: " Fun , Happy , Hopeful",
    },
    {
      name: "Cedarmore Antony",
      artisits: "TYME",
      img: tyme,
      count: "2:45",
      tags: " Fun , Happy , Hopeful",
    },

    {
      name: "Please, Please",
      artisits: "Dr. Delight",
      img: DrDelight,
      count: "2:44",
      tags: " Fun , Happy , Hopeful",
    },

    {
      name: "Semester Abroad",
      artisits: "GRIDKIDS",
      img: DrDelight,
      count: "2:45",
      tags: " Fun , Happy , Hopeful",
    },

    {
      name: "Heir of Elegance",
      artisits: "Cody Martin",
      img: CodyMartin,
      count: "2:51",
      tags: " Fun , Happy , Hopeful",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="trendingsounds">
      <div className="trending-sound-box mt-[70px] mb-[120px]">
        <h2 className="font-bold text-[30px]">Trending Songs</h2>
        <p className="text-[18px]">Check out whats popular in our library</p>

        <div className="trending-songs">
          {songs.map((item, index) => (
            <div
              key={index}
              className="trending-song  flex justify-between gap-2 items-center mb-[20px]"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="serial-number-song">
                <p className="text-[14px]">{index + 1}</p>
              </div>
              <div className="artisit flex gap-[23px] items-center relative">
                <Image src={item.img} width={47} height={47} />
                {hoveredIndex === index && (
                  <a
                    className="play-btn absolute top-2 start-2 transform translate-x-1/2 translate-y-1/2"
                    href="#"
                  >
                    <svg
                      className="sc-iBPRYJ kpkWjD"
                      color=""
                      height="16"
                      fill="#fff"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 32 32"
                      width="16"
                    >
                      <g>
                        <path
                          stroke="none"
                          d="M7.76 28.8v-25.6l20.48 12.8zM7.76 29.76c-0.128 0-0.32-0.064-0.448-0.128-0.32-0.192-0.512-0.512-0.512-0.832v-25.6c0-0.32 0.192-0.64 0.512-0.832s0.704-0.128 0.96 0l20.48 12.8c0.256 0.192 0.448 0.512 0.448 0.832s-0.192 0.64-0.448 0.832l-20.48 12.8c-0.192 0.064-0.32 0.128-0.512 0.128zM8.72 4.928v22.144l17.664-11.072-17.664-11.072z"
                        ></path>
                      </g>
                    </svg>
                  </a>
                )}
                <div className="artisit-details">
                  <h1 className="text-[14px] font-semibold">{item.name}</h1>
                  <p className="text-[14px]">{item.artisits}</p>
                </div>
              </div>
              <div className="voice-image">
                <Image src={tweenysomething} width={245} height={34} />
              </div>
              <div className="count">
                <p className="text-[14px]">{item.count}</p>
              </div>
              <div className="tags">
                <p className="text-[14px] text-[#8b909b]">{item.tags}</p>
              </div>
              <div className="download-btn">
                <button className="secondary-btn">Download</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
