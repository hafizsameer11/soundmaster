import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import MostPopular from "../../public/images/most-popular-opt.jpg";
import FinalFrontier from "../../public/images/final-frontier-opt.jpg";
import OurWorld from "../../public/images/our-world-opt.jpg";
import Cityscapes from "../../public/images/cityscapes-opt.jpg";
import Technology from "../../public/images/technology-opt.jpg";
import IDo from "../../public/images/i-do-opt.jpg";
import Timelapse from "../../public/images/timelapses-opt.jpg";
import Corporate from "../../public/images/corporate-opt.jpg";
import Uppbeat_Book from "../../public/imagess/Uppbeat_Book-Day_Fantasy-2_7618744091138965.jpeg";
import UppBeat_Playlists from "../../public/imagess/UppBeat_Playlists_Beats_Chillhop-Beats.jpeg";
import Beats_Lofi from "../../public/imagess/UppBeat_Playlists_Beats_Lofi-Beats.jpeg";
import Beats_Lush from "../../public/imagess/UppBeat_Playlists_Beats_Lush-Beats.jpeg";
import Beats_Sunny from "../../public/imagess/UppBeat_Playlists_Beats_Sunny-Beats.jpeg";
import Uppbeat_TOP from "../../public/imagess/Uppbeat_TOP-SFX-30-Day_SFX_7015378214127582.jpeg";
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
      text: "",
      url: Uppbeat_TOP,
  },
  {
      text: "",
      url: Beats_Sunny,
  },
  {
      text: "",
      url: Beats_Lush,
  },
  {
      text: "",
      url: Beats_Lofi,
  },
  {
      text: "",
      url: UppBeat_Playlists,
  },
  {
      text: "",
      url: Uppbeat_Book,
  },
  {
      text: "",
      url: Uppbeat_TOP,
  },
    {
      text: "Most Popular",
      url: MostPopular,
    },
    {
      text: "Final Frontier",
      url: FinalFrontier,
    },
    {
      text: "Our World",
      url: OurWorld,
    },
    {
      text: "Cityscapes",
      url: Cityscapes,
    },
    {
        text: "Technology",
        url: Technology,
    },
    {
        text: "I Do",
        url: IDo,
    },
    {
        text: "Corporate",
        url: Corporate,
    },
    {
        text: "Timelapse",
        url: Timelapse,
    },
   
  ];

  return (
    <>
      <h1 className="text-[26px] cat-names font-semibold">Video</h1>
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
