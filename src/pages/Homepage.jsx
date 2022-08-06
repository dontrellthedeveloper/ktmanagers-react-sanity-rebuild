// import './App.css';
// import './Responsive.css';
// import './loader';

import React from 'react';

import {Header, About, Brands, Stats, Portfolio, Services, Media, Team, AddServices} from '../container';
import {Navbar} from '../components'

const Homepage = () => {


    return (
        <>
            {/*<Navbar/>*/}
            <Header/>
            <About/>
            <Brands/>
            <Stats/>
            <Portfolio/>
            <Services/>
            {/*<Media/>*/}
            {/*<Team/>*/}
            {/*<AddServices/>*/}


        </>
    );
}

export default Homepage;