import React, { useEffect, useState } from 'react'

import "./styles/Admin.css"

const Admin = () => {

  const [data, setData] = useState("")
  const [text, setText] = useState("")
  const [title, setTitle] = useState("text1")

  useEffect(() => {
    fetch(`http://localhost:3000/admin/${localStorage.getItem("id")}`)
      .then(res => res.json())
      .then(res => setData(res[0]))
  }, [])


  function handleClick(title) {
    fetch(`http://localhost:3000/admin/${localStorage.getItem("id")}`, {
      method : "PATCH",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({title : title, text : text})
    })
    location.pathname = `admin/${localStorage.getItem("id")}`
  }

  return (
    <div className='obj'>
      <h4>location : {JSON.stringify(data.location)}</h4>
      <hr />
      <h4>text1 : {JSON.stringify(data.text1)}</h4>
      <hr />
      <h4>text2 : {JSON.stringify(data.text2)}</h4>
      <hr />
      <h4>text3 : {JSON.stringify(data.text3)}</h4>
      <hr />
      <h4>instagramName : {JSON.stringify(data.instagramName)}</h4>
      <hr />
      <h4>instagramUrl : {JSON.stringify(data.instagramUrl)}</h4>
      <hr />
      <h4>facebookName : {JSON.stringify(data.facebookName)}</h4>
      <hr />
      <h4>facebookUrl : {JSON.stringify(data.facebookUrl)}</h4>
      <hr />
      <h4>gmail : {JSON.stringify(data.gmail)}</h4>
      <hr />
      <h4>phoneNumber : {JSON.stringify(data.phoneNumber)}</h4>
      <hr />
      <h4>tiktokName : {JSON.stringify(data.tiktokName)}</h4>
      <hr />
      <h4>tiktokUrl : {JSON.stringify(data.tiktokUrl)}</h4>




      <div className="inputs">
        <div className="input">
          <select onChange={(e)=>setTitle(e.target.value)}>
            <option value="text1">text1</option>
            <option value="text2">text2</option>
            <option value="text3">text3</option>
            <option value="tiktokUrl">tiktokUrl</option>
            <option value="tiktokName">tiktokName</option>
            <option value="phoneNumber">phoneNumber</option>
            <option value="gmail">gmail</option>
            <option value="facebookName">facebookName</option>
            <option value="facebookUrl">facebookUrl</option>
            <option value="instagramName">instagramName</option>
            <option value="instagramUrl">instagramUrl</option>
          </select>
          <textarea onChange={e => setText(e.target.value)} name="" id=""></textarea>
          <button onClick={() => handleClick(title)}>change</button>
        </div>
      </div>
    </div>
  )
}

export default Admin