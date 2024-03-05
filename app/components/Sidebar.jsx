"use client"
import React, { useState } from 'react';
import SVGComponent from './Svgcomponent';
import { FaMusic } from 'react-icons/fa';
import { BsSoundwave } from 'react-icons/bs';
import { BiDollar } from 'react-icons/bi';
import { BsGraphUpArrow } from 'react-icons/bs';
import { FaQuestion } from 'react-icons/fa';

export default function Sidebar() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [bottomactiveinde,setbottonactiveindex]=useState(-1)

  const menu = [
    {
      text: 'Music',
      icon: <FaMusic />,
    },
    {
      text: 'Sound',
      icon: <BsSoundwave />,
    },
    {
      text: 'Trending Songs',
      icon: <BsGraphUpArrow />,
    },
    {
      text: 'Membership',
      icon: <BiDollar />,
    },
  ];

  const bottom_menu = [
    {
      text: 'Help Center',
      icon: <FaQuestion />,
      indexx:7
    },
  ];

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };
  const handleItemClickbottome = (index) => {
    setbottonactiveindex(index);
  };

  return (
    <div className='sidebar'>
      <div className='logo'>
        <SVGComponent />
      </div>
      <div className='sideba-menu-div'>
        <ul className='sidebar-menu mt-[80px]'>
          {menu.map(({ text, icon }, index) => (
            <li className={`mb-5 ${index === activeIndex ? 'active-li' : ''}`} key={index}>
              <a href='#' className='flex items-center gap-[12px]' onClick={() => handleItemClick(index)}>
                <span>{icon}</span>
                <span>{text}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className='sideba-menu-div'>
        <ul className='sidebar-menu mt-[80px]'>
          {bottom_menu.map(({ text, icon,indexx }, index) => (
            <li className={`mb-5 ${indexx === bottomactiveinde ? 'active-li' : ''}`} key={index}>
              <a href='#' className='flex items-center gap-[12px]' onClick={() => handleItemClickbottome(indexx)}>
                <span>{icon}</span>
                <span>{text}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
