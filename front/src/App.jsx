import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import LogoInfo from './components/LogoInfo'
import Infos from './components/Infos'

import "./components/styles/animation.css"
import BussImg from './components/BussImg'
import Footer from './components/Footer'

import { Routes, Route } from "react-router-dom"
import Admin from './components/Admin'
import Error from './components/Error'

const App = () => {

  const [data, setData] = useState("")

  useEffect(() => {
    fetch(`http://localhost:3000/admin/${localStorage.getItem("id")}`)
      .then(res => res.json())
      .then(res => setData(res[0]))
  }, [])

  let id = location.pathname

  return (
    <>

      <Routes>
        <Route path='/' element={
          <>
            <Header data={data} />
            <LogoInfo data={data} />
            <Infos data={data} />
            <BussImg />
            <Footer data={data} />
          </>
        } />
        <Route path='/admin/:id' element={
          (id.split("/")[2] === localStorage.getItem("id") ? <Admin /> : <Error/>)
        } />
        <Route path='*' element = {<Error/>}/>
      </Routes>
    </>
  )
}

export default App