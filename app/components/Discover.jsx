import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import upbeat from "../../public/images/upbeat-opt.jpg";
import electronic from "../../public/images/electronic-opt.jpg";
import soundscape from "../../public/images/soundscapes-opt.jpg";
import timetodance from "../../public/images/time-to-dance-opt.jpg";
import lofi from "../../public/images/lofi-hip-hop-opt.jpg";
import indie from "../../public/images/indie-rock-opt.jpg";
import classica from "../../public/images/classical-opt.jpg";
import hopefull from "../../public/images/hopeful-acoustics-opt.jpg";
import hopeAI from "../../public/imagess/AI-innovation_2347155710352502.jpeg";
import Broll from "../../public/imagess/B-Roll_Winter_23_1650312869235209.jpeg";
import Brand from "../../public/imagess/Brand-New-In_6584687793083866.jpeg";
import Inspired from "../../public/imagess/Inspired-by_Dune_6122150460496892.jpeg";
import Into from "../../public/imagess/Into-the-wild_1860188083015263.jpeg";
import MemeMeme from "../../public/imagess/Meme-Sounds-2024_SFX_2939672628365819.jpeg";
import Movie from "../../public/imagess/Movie-Magic_6841687230556247.jpeg";
import Phonk from "../../public/imagess/Phonk_1744365208192584.jpeg";
import Uppbeat_Book from "../../public/imagess/Uppbeat_Book-Day_Crime_2_1859574040110816.jpeg";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

export default function Discover() {
  const tabContentsRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const container = tabContentsRef.current;
      if (container) {
        setShowLeftButton(container.scrollLeft > 0);
        showRightButton(true);
        // setShowRightButton(container.scrollLeft + container.offsetWidth >= container.scrollWidth * 0.9);
      }
    };

    const container = tabContentsRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const scroll = (direction) => {
    const container = tabContentsRef.current;
    if (container) {
      const scrollAmount = direction === "left" ? -container.offsetWidth : container.offsetWidth;
      container.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
      });
    }
  };

  const backgroundImage = [
    {
      text: "Upbeat",
      url: upbeat,
    },
    {
      text: "Electronic",
      url: electronic,
    },
    {
      text: "Soundscapes",
      url: soundscape,
    },
    {
      text: "Time to Dance",
      url: timetodance,
    },
    {
      text: "LoFi Hip Hop",
      url: lofi,
    },
    {
      text: "Indie Rock",
      url: indie,
    },
    {
      text: "Classical",
      url: classica,
    },
    {
      text: "Hopeful Acoustics",
      url: hopefull,
    },
    {
      text:"",
      url:hopeAI
    },
    {
      text:"",
      url:Broll
    },
    {
      text:"",
      url:Inspired
    },
    {
      text:"",
      url:Into
    },
    {
      text:"",
      url:Uppbeat_Book
    },
    {
      text:"",
      url:MemeMeme
    },
    {
      text:"",
      url:Movie
    },
    {
      text:"",
      url:Phonk
    },
  ];

  return (
    <>
      <h1 className="text-[26px] cat-names">Audio</h1>
      <div className="tab-contents" ref={tabContentsRef}>
        {showLeftButton && (
          <button className="scroll-button arrow-btn-left left" onClick={() => scroll("left")}>
            <FaCaretLeft />
          </button>
        )}
        {backgroundImage.map((item, index) => (
          <div
            key={index}
            className="tab-content"
            style={{ backgroundImage: `url(${item.url.src})` }}
          >
            <div className="image-container"></div>
            <h2 className="tab-content-text">{item.text}</h2>
          </div>
        ))}
        {showRightButton && (
          <button className="scroll-button right arrow-btn-right" onClick={() => scroll("right")}>
            <FaCaretRight />
          </button>
        )}
      </div>
    </>
  );
}
