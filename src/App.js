import './App.css';
import './Responsive.css';
import './loader';

import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Influencer from "./pages/Influencer";
import Influencers from "./pages/Influencers";
import Kids from "./pages/Kids";
import Kid from "./pages/Kid";
import Services from "./pages/Services";
import Service from "./pages/Service";

import {Footer} from "./container";
import {Navbar} from "./components";






const App = () => {


  return (
    <>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Homepage/>} exact />
            <Route path='/about' element={<About/>}  />
            <Route path='/influencers' element={<Influencers/>} />
            <Route path='/:slug' element={<Influencer/>} />
            <Route path='/kids' element={<Kids/>} />
            <Route path='/kids/:slug' element={<Kid/>} />
            <Route path='/services' element={<Services/>} />
            <Route path='/:slug' element={<Service/>} />
        </Routes>
        <Footer/>


    </>
  );
}

export default App;
