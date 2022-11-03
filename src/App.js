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
import WhatWeOffer from "./pages/WhatWeOffer";
import Mascot from "./pages/Mascot";
import {Helmet} from "react-helmet";





const App = () => {


  return (
    <>
        <Navbar/>
        <Helmet>
            <title>Knight Team Management</title>
            <meta
                name='description'
                content='Social Media Branding Agency located in Burbank, CA.'
            />
            <meta name='keywords' content='Social Media, Branding, Influencer'/>
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="%PUBLIC_URL%/logo152.png"
            />
        </Helmet>
        <Routes>
            <Route path='/' element={<Homepage/>} exact />
            <Route path='/about' element={<About/>}  />
            <Route path='/influencers' element={<Influencers/>} />
            <Route path='/:slug' element={<Influencer/>} />
            <Route path='/kids' element={<Kids/>} />
            <Route path='/kid/:slug' element={<Kid/>} />
            <Route path='/services' element={<Services/>} />
            <Route path='/service/:slug' element={<Service/>} />
            <Route path='/what-we-offer' element={<WhatWeOffer/>} />
            <Route path='/our-mascot' element={<Mascot/>} />
        </Routes>
        <Footer/>


    </>
  );
}

export default App;
