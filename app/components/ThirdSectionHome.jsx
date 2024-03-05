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

export default function ThirdSectionHome() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <div className="mb-[60px] mt-[120px]">
      <h2 className="text-black text-center text-[46px] font-bold">
        Music, SFX, and Video for any project
      </h2>
      <p className="text-black w-[40%] m-auto text-center mt-6 mb-12">
        Browse thousands of tracks curated by our music experts. Download full
        songs including stems by Grammy-winning artists to take your project to
        the next level.
      </p>


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
