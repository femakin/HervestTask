import React from 'react'
import {
    BrowserRouter as Router,

    Route,
    Routes,

  } from "react-router-dom";

import Home from './Pages/Home';
export default function Routing() {
  return (
    <div>
           <Router>
           
           <Routes>
           <Route path='/' element={<Home/>} />
           
           </Routes>
           
           
           
           
           </Router>
        
        






    </div>
  )
}
