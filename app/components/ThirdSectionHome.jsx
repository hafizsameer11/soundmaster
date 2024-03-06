"use client";
import { React, useState } from "react";
import Audio from "./Audio";
import SoundEffects from "./SoundEffects";
import Video from "./Video";
import MusicStyyle from "./Musicstyle";
import BackgroundVibe from "./BackgroundvVbe";
import Discover from "./Discover";
import Mood from "./Mood";
import Theme from "./Theme";
import Topcreaterchoice from "./Topcreatorpicks";
import { FaSearch } from "react-icons/fa";

export default function ThirdSectionHome() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <div className="mb-[60px] mt-[10px]">
     <div className="search-form m-auto">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search Any Music" />
        </div>


      <Audio />
    
      <SoundEffects />

      <Video />
      <MusicStyyle/>
      <BackgroundVibe/>
      {/* <Discover/> */}
      <Mood/>
      {/* <Theme/> */}
      <Topcreaterchoice/>
    </div>
  );
}
