import './App.css';
import './Responsive.css';
import './loader';

import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// import {Header, About, Brands, Stats, Portfolio, Services, Media, Team, AddServices} from './container';
// import {Navbar} from './components'
import Homepage from "./pages/Homepage";
import Influencer from "./pages/Influencer";
import {Footer} from "./container";
import {Navbar} from "./components";

const App = () => {


  return (
    <Router>
        {/*<Navbar/>*/}
        <Routes>
            <Route path='/' element={<Homepage/>} exact />
            <Route path='/:slug' element={<Influencer/>} exact />
        </Routes>
        <Footer/>
        {/*<Homepage/>*/}


    </Router>
  );
}

export default App;
