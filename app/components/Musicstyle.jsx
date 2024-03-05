import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import upbeat from "../../public/musicstyle/a.jpeg";
import electronic from "../../public/musicstyle/b.jpeg";
import soundscape from "../../public/musicstyle/c.jpeg";
import timetodance from "../../public/musicstyle/d.jpeg";
import lofi from "../../public/musicstyle/e.jpeg";
import indie from "../../public/musicstyle/f.jpeg";
import classica from "../../public/musicstyle/g.jpeg";
import hopefull from "../../public/musicstyle/h.jpeg";
import hopeAI from "../../public/musicstyle/i.jpeg";
import Broll from "../../public/musicstyle/j.jpeg";
import Brand from "../../public/musicstyle/k.jpeg";
import Inspired from "../../public/musicstyle/l.jpeg";
import Into from "../../public/musicstyle/m.jpeg";
import MemeMeme from "../../public/musicstyle/n.jpeg";
import Movie from "../../public/musicstyle/o.jpeg";
import Phonk from "../../public/imagess/Phonk_1744365208192584.jpeg";
import Uppbeat_Book from "../../public/imagess/Uppbeat_Book-Day_Crime_2_1859574040110816.jpeg";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

export default function MusicStyyle() {
  const tabContentsRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const container = tabContentsRef.current;
      if (container) {
        setShowLeftButton(container.scrollLeft > 0);
        setShowRightButton(true)
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
      text: "",
      url: upbeat,
    },
    {
      text: "",
      url: electronic,
    },
    {
      text: "",
      url: soundscape,
    },
    {
      text: "",
      url: timetodance,
    },
    {
      text: "",
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
      <h1 className="text-[26px] cat-names">Music Style</h1>
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
            <h2 className="tab-content-text"></h2>
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
