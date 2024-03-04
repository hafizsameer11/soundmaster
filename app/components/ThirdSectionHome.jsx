"use client";
import { React, useState } from "react";
import Audio from "./Audio";
import SoundEffects from "./SoundEffects";
import Video from "./Video";

export default function ThirdSectionHome() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <div className="mb-[60px] mt-[60px]">
      <h2 className="text-black text-center text-[46px] font-bold">
        Music, SFX, and Video for any project
      </h2>
      <p className="text-black w-[40%] m-auto text-center mt-6">
        Browse thousands of tracks curated by our music experts. Download full
        songs including stems by Grammy-winning artists to take your project to
        the next level.
      </p>


      <Audio />
    
      <SoundEffects />

      <Video />
    </div>
  );
}
