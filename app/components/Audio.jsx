import React from "react";
import Image from 'next/image';
// import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import upbeat from "../../public/images/upbeat-opt.jpg";
import electronic from "../../public/images/electronic-opt.jpg";
import soundscape from "../../public/images/soundscapes-opt.jpg";
import timetodance from "../../public/images/time-to-dance-opt.jpg";
import lofi from "../../public/images/lofi-hip-hop-opt.jpg";
import indie from "../../public/images/indie-rock-opt.jpg";
import classica from "../../public/images/classical-opt.jpg";
import hopefull from "../../public/images/hopeful-acoustics-opt.jpg";

export default function Audio() {
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
  ];
  const backgroundImage2 = [
 
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    // autoplaySpeed:2000,
    // arrows: true, 
  };
  return (
    <div className='w-[75%] m-auto'>
    <h1 className="text-[26px]  cat-names ">Audio</h1>
        
    <Slider {...settings}>
      {backgroundImage.map((item, index) => (
        <div key={index} className="tab-content" >
        <Image className='tab-conten-img' src={item.url} width={180} height={180} />
          <h2 className='tab-content-text'>{item.text}</h2>
        </div>
      ))}
    </Slider>
    </div>
  );
}
