import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Content from './components/Content'
import WeatherCard from './components/WeatherCard'
import Navbar from './components/Navbar'
import About from './pages/About'
import { Routes, Route } from "react-router-dom"
import NotPageFound from './pages/PageNotFound'
// import WeekContainer from './components/WeekContainer'
import Search from './components/Search'
// import Clock from 'react-clock'
import Clock from './components/Clock'
// import React, { useState, useEffect } from 'react'



function App() {
  const [value, setValue] = useState(new Date());

  useEffect(() => { const interval = setInterval(() => setValue(new Date()), 1000); 
    
  return () => { clearInterval(interval); 
  }; 
}, []);

  return (
    <div className="App">

      {/* <div>
        <p>Cur Time:</p>
        <Clock value={value} />
      </div> */}

      <Header></Header>
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotPageFound />} />
      </Routes>
      <Navbar></Navbar>
        <Search />
      {/* <Frst></Frst> */}
      {/* <WeatherCard></WeatherCard> */}
    </div >
  )
}

export default App
