import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";

import "./styles/Header.css"

const Header = ({data}) => {
  return (
    <>
    <div className="blue-div"></div>
    <header>
        <div className="logo">
          <img src="./public/photo_2025-03-15_00-11-49.jpg" alt="" />
        </div> 
        <div className="contact">
        <h3><FaPhoneVolume style={{color: "black"}}/> <a href={`tel:${data.phoneNumber}`}>{data.phoneNumber}</a>
        </h3>
        <h3>
          <FaLocationDot style={{color: "black"}}/> <a href={`${data.location}`}>ԳՐԻԳՈՐ ՀԱՍՐԱԹՅԱՆ 10/9</a>
        </h3>
        </div>
    </header>
    </>
  )
}

export default Header