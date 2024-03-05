import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import upbeat from "../../public/BackgroundvVbe/a.jpeg";
import electronic from "../../public/BackgroundvVbe/b.jpeg";
import soundscape from "../../public/BackgroundvVbe/c.jpeg";
import timetodance from "../../public/BackgroundvVbe/d.jpeg";
import lofi from "../../public/BackgroundvVbe/e.jpeg";
import indie from "../../public/BackgroundvVbe/f.jpeg";
import classica from "../../public/BackgroundvVbe/g.jpeg";
import hopefull from "../../public/BackgroundvVbe/h.jpeg";
import hopeAI from "../../public/BackgroundvVbe/i.jpeg";
import Broll from "../../public/BackgroundvVbe/j.jpeg";
import Brand from "../../public/imagess/Brand-New-In_6584687793083866.jpeg";
import Inspired from "../../public/BackgroundvVbe/k.jpeg";
import Into from "../../public/BackgroundvVbe/l.jpeg";
import MemeMeme from "../../public/BackgroundvVbe/m.jpeg";
import Movie from "../../public/BackgroundvVbe/n.jpeg";
import Phonk from "../../public/BackgroundvVbe/o.jpeg";
import Uppbeat_Book from "../../public/BackgroundvVbe/p.jpeg";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

export default function BackgroundVibe() {
  const tabContentsRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const container = tabContentsRef.current;
      if (container) {
        setShowLeftButton(container.scrollLeft > 0);
        // showRightButton(true);
        setShowRightButton(true);
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
      <h1 className="text-[26px] cat-names">Background Vibe</h1>
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
