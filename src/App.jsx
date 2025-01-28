//import { useState } from 'react'

import './App.css';
import Home from '../component/home/home';
import About  from '../component/about/about';
import Contador from '../component/contador/contador';
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
  
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contador" element={<Contador />} />
    
    </Routes>
    </BrowserRouter>
  )
    
}

export default App
