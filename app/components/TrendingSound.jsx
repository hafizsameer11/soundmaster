import Image from "next/image";
import React from "react";
import cody from "../../public/imagess/cody-martin-opt.jpg";
import tweenysomething from "../../public/imagess/tweenysomething-01.png";
import DanielMusto from "../../public/imagess/daniele-musto-opt.jpg";
import tyme from '../../public/imagess/tayme-opt.jpg'
import DrDelight from '../../public/imagess/dr-delight-opt.jpg'
import gridkids from '../../public/imagess/gridkids-opt.jpg'
import CodyMartin from '../../public/imagess/cody-martin-opt.jpg'

export default function TrendingSound() {
    const songs=[
        {
            name:"Tweenysomething",
            artisits:"Daniel Musto",
            img:DanielMusto,
            count:"2:44",
            tags: " Fun , Happy , Hopeful"
        },
        {
            name:"Another Day",
            artisits:"TAYME",
            img:tyme,
            count:"3:20",
            tags: " Fun , Happy , Hopeful"
        },
        {
            name:"Cedarmore",
            artisits:"TYME",
            img:tyme,
            count:"2:45",
            tags: " Fun , Happy , Hopeful"
        },
    
        {
            name:"Please, Please",
            artisits:"Dr. Delight",
            img:DrDelight,
            count:"2:44",
            tags: " Fun , Happy , Hopeful"
        },
    
        {
            name:"Semester Abroad",
            artisits:"GRIDKIDS",
            img:DrDelight,
            count:"2:45",
            tags: " Fun , Happy , Hopeful"
        },
    
        {
            name:"Heir of Elegance",
            artisits:"Cody Martin",
            img:CodyMartin,
            count:"2:51",
            tags: " Fun , Happy , Hopeful"
        },
     
    ]
  return (
    <div className="trendingsounds w-[75%] m-auto ">
      <div className="trending-sound-box mt-[120px]">
        <h2 className="font-bold text-[30px]">Trending Songs</h2>
        <p className="text-[18px]">Check out whats popular in our library</p>

        <div className="trending-songs ">
        {
  songs.map((item, index) => {
    return (
      <div key={index} className="trending-song  flex justify-between gap-2 items-center mb-[20px]">
        <div className="serial-number-song">
          <p className="text-[14px]">{index}</p>
        </div>
        <div className="artisit flex gap-[23px] items-center">
          <Image src={item.img} width={47} height={47} />
          <div className="artisit-details">
            <h1 className="text-[14px] font-semibold">{item.name}</h1>
            <p className="text-[14px]">{item.artisits}</p>
          </div>
        </div>
        <div className="voice-image">
          <Image src={tweenysomething} width={245} height={34} />
        </div>
        <div className="count">
          <p className="text-[14px]">{item.count}</p>
        </div>
        <div className="tags">
          <p className="text-[14px] text-[#8b909b]">{item.tags}</p>
        </div>
        <div className="download-btn">
          <button className="secondary-btn">Download</button>
        </div>
      </div>
    );
  })
}

        </div>
      </div>
    </div>
  );
}
