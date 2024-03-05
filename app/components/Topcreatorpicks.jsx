import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import upbeat from "../../public/topcreater/w.jpeg";
import electronic from "../../public/topcreater/v.jpeg";
import soundscape from "../../public/topcreater/c.jpeg";
import timetodance from "../../public/topcreater/d.jpeg";
import lofi from "../../public/topcreater/e.jpeg";
import indie from "../../public/topcreater/f.jpeg";
import classica from "../../public/topcreater/g.jpeg";
import hopefull from "../../public/topcreater/h.jpeg";
import hopeAI from "../../public/topcreater/i.jpeg";
import Broll from "../../public/topcreater/j.jpeg";
import Brand from "../../public/topcreater/p.jpeg";
import Inspired from "../../public/topcreater/k.jpeg";
import Into from "../../public/topcreater/l.jpeg";
import MemeMeme from "../../public/topcreater/m.jpeg";
import Movie from "../../public/topcreater/s.jpeg";
import Phonk from "../../public/topcreater/t.jpeg";
import Uppbeat_Book from "../../public/topcreater/p.jpeg";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

export default function Topcreaterchoice() {
  const tabContentsRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const container = tabContentsRef.current;
      if (container) {
        setShowLeftButton(container.scrollLeft > 0);
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
      <h1 className="text-[20px] font-bold cat-names">Top Creater Choice</h1>
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
