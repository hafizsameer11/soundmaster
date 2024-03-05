import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Horror from "../../public/images/horror-opt.jpg";
import SoundDesign from "../../public/images/sound-design-opt.jpg";
import LevelUp from "../../public/images/level-up-opt.jpg";
import EpicFilm from "../../public/images/epic-film-opt.jpg";
import Crowds from "../../public/images/crowds-opt.jpg";
import Atmosphere from "../../public/images/atmosphere-opt.jpg";
import Foley from "../../public/images/foley-opt.jpg";
import ScienceFiction from "../../public/images/science-fiction-opt.jpg";
import american from "../../public/soundeffects/american-idol-136x136.jpg"
import fxQsTBL from "../../public/soundeffects/8140fxQsTBL._RI_-136x136.jpg"
import abc from "../../public/soundeffects/property-vir-136x136.jpg"
import ac from "../../public/soundeffects/the-savage-line-136x136.jpg"
import acd from "../../public/soundeffects/under-employed-136x136.jpg"
import dd from "../../public/soundeffects/what-not-to-wear-136x136.jpg"
import acdd from "../../public/soundeffects/Unknown-136x136.jpeg"
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

export default function Audio() {
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
      text: "Horror",
      url: Horror,
    },
    {
      text: "Sound Design",
      url: SoundDesign,
    },
    {
      text: "Level Up",
      url: LevelUp,
    },
    {
      text: "Epic Film",
      url: EpicFilm,
    },
    {
      text: "Crowds",
      url: Crowds,
    },
    {
      text: "Atmosphere",
      url: Atmosphere,
    },
    {
      text: "Foley",
      url: Foley,
    },
    {
      text: "Science Fiction",
      url: ScienceFiction,
    },
    {
      text: "",
      url: acdd,
    },
    {
      text: "",
      url: dd,
    },
    {
      text: "",
      url: acd,
    },
    {
      text: "",
      url: ac,
    },
    {
      text: "",
      url: abc,
    },
    {
      text: "",
      url: fxQsTBL,
    },
    {
      text: "",
      url: american,
    },
  ];

  return (
    <>
      <h1 className="text-[26px] cat-names">Sound Effets</h1>
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
