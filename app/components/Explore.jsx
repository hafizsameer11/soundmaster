import React from "react";
import a from '../../public/blackdesign/a.jpg'
import b from '../../public/blackdesign/b.jpg'
import c from '../../public/blackdesign/c.jpg'
import d from '../../public/blackdesign/d.jpg'


export default function Explore() {
    const exploretabs=[
        {
            name:"Music Quizes",
            img:a
        },
        {
            name:"Podcast",
            img:b
        },
        {
            name:"Concerts",
            img:c
        },
        {
            name:"Dezeer Originals",
            img:d
        },
    ]
  return (
    <div className="explore">
      <h1 className="text-[20px] font-bold mt-[30px]">Explore All </h1>
      <div className="explore-tabs pl-10 pr-10">
      {
        exploretabs.map(({name,img,index})=>{
            return(

        <div key={index} className="explore-tab" style={{ backgroundImage: `url(${img.src})` }}>
          <h1 className="explore-text text-[24px] text-white">{name}</h1>
        </div>

            )
        })
      }
       
      </div>
    </div>
  );
}
