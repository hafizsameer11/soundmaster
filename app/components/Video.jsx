import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import MostPopular from "../../public/images/most-popular-opt.jpg";
import FinalFrontier from "../../public/images/final-frontier-opt.jpg";
import OurWorld from "../../public/images/our-world-opt.jpg";
import Cityscapes from "../../public/images/cityscapes-opt.jpg";
import Technology from "../../public/images/technology-opt.jpg";
import IDo from "../../public/images/i-do-opt.jpg";
import Timelapse from "../../public/images/timelapses-opt.jpg";
import Corporate from "../../public/images/corporate-opt.jpg";
import Image from 'next/image';

export default function Video() {
  const backgroundImage = [
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

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed:2000
  };

  return (
    <div className='w-[75%] m-auto '>
    <h1 className="text-[26px]  cat-names mt-8 ">Videos</h1>
        
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
