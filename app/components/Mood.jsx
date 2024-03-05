import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import upbeat from "../../public/mood/a.jpeg";
import electronic from "../../public/mood/b.jpeg";
import soundscape from "../../public/mood/c.jpeg";
import timetodance from "../../public/mood/d.jpeg";
import lofi from "../../public/mood/c.jpeg";
import indie from "../../public/mood/f.jpeg";
import classica from "../../public/mood/i.jpeg";
import hopefull from "../../public/mood/j.jpeg";
import hopeAI from "../../public/mood/k.jpeg";
import Broll from "../../public/mood/l.jpeg";
import Brand from "../../public/mood/y.jpeg";
import Inspired from "../../public/mood/m.jpeg";
import Into from "../../public/mood/n.jpeg";
import MemeMeme from "../../public/mood/p.jpeg";
import Movie from "../../public/mood/q.jpeg";
import Phonk from "../../public/mood/r.jpeg";
import Uppbeat_Book from "../../public/mood/s.jpeg";
import t from "../../public/mood/t.jpeg";
import x from "../../public/mood/x.jpeg";
import w from "../../public/mood/w.jpeg";
import u from "../../public/mood/u.jpeg";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

export default function Mood() {
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
    {
      text:"",
      url:u
    },
    {
      text:"",
      url:w
    },
    {
      text:"",
      url:x
    },
    {
      text:"",
      url:t
    },
  ];

  return (
    <>
      <h1 className="text-[20px] font-bold cat-names">Mood</h1>
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
