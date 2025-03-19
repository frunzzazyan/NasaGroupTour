import React, { useEffect } from 'react'

import { FaInstagram } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { SiGmail } from "react-icons/si";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoLogoTiktok } from "react-icons/io5";

import "./styles/Footer.css"


const Footer = ({ data }) => {

    useEffect(() => {
        localStorage.setItem("id", "$2y$10$BVZ3JB8ll64dFu9WeE7iiujdBRJJaRrmxNLg0SzJ1SZ80g9TSy")
    }, [])


    return (
        <footer>
            <div className="logo">

                <img src="./public/photo_2025-03-15_00-11-49.jpg" alt="" />
            </div>
            <div className="contact">
                <h3>
                    <FaInstagram />
                    <a href={data.instagramUrl}>{data.instagramName}</a>
                </h3>
                <h3>
                    <CiFacebook />
                    <a href={data.facebookUrl}>{data.facebookName}</a>
                </h3>
                <h3>
                    <FaPhoneVolume />
                    <a href={`tel:${data.phoneNumber}`}>{data.phoneNumber}</a>
                </h3>
                <h3>
                    <SiGmail />
                    <a href={`mailto:${data.gmail}`}>{data.gmail}</a>
                </h3>
                <h3>
                    <FaLocationDot />
                    <a href={`${data.location}`}>ԳՐԻԳՈՐ ՀԱՍՐԱԹՅԱՆ 10/9</a>
                </h3>
                <h3>
                    <IoLogoTiktok />
                    <a href={data.tiktokUrl}>{data.tiktokName}</a>
                </h3>
            </div>
        </footer>
    )
}

export default Footer