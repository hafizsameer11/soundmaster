import React from 'react'
import SVGComponent from './Svgcomponent'
import { FaMusic } from "react-icons/fa";
import { BsSoundwave } from "react-icons/bs";



export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='logo'>
        <SVGComponent />
      </div>
    </div>
  )
}
