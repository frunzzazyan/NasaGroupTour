import React from 'react'

import "./styles/LogoInfo.css"

const LogoInfo = ({data}) => {
  return (
    <div className='infos'>
        <div className="info">
          <h1 className='text-pop-up-right'>{data.text1 ? data.text1 : "Corporate Legal Representation"}</h1>
          <p className='text-pop-up-right'>{data.text2 ? data.text2 : "We understand the difficulties and stress that your legal issues bring. Our team is committed to providing you with the individual attention, communication, and dedication you deserve."}</p>
        </div>
        <div className="logo">
          <img  src="./public/HD-wallpaper-buildings-plane-sky-bottom-view.jpg" alt="" />
        </div>
    </div>
  )
}

export default LogoInfo