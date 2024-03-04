import React from 'react'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Horror from "../../public/images/horror-opt.jpg";
import SoundDesign from "../../public/images/sound-design-opt.jpg";
import LevelUp from "../../public/images/level-up-opt.jpg";
import EpicFilm from "../../public/images/epic-film-opt.jpg";
import Crowds from "../../public/images/crowds-opt.jpg";
import Atmosphere from "../../public/images/atmosphere-opt.jpg";
import Foley from "../../public/images/foley-opt.jpg";
import ScienceFiction from "../../public/images/science-fiction-opt.jpg";
import Image from 'next/image';


export default function SoundEffects() {

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
  ];
  const backgroundImage2 = [
   
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
      <h1 className="text-[26px]  cat-names mt-8 ">Sound Effects</h1>
          
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
