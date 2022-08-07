// import './App.css';
// import './Responsive.css';
// import './loader';

import React from 'react';

import {
    Header,
    About,
    Brands,
    Stats,
    Portfolio,
    Services,
    Media,
    Team,
    AddServices,
    Statement,
    Footer
} from '../container';
import {Navbar} from '../components'

const Homepage = () => {


    return (
        <>
            {/*<Navbar/>*/}
            <Header/>
            <Portfolio/>
            <Stats/>
            <Brands/>
            <Services/>

            {/*<About/>*/}

            {/*<Statement/>*/}
            {/*<Media/>*/}
            {/*<Team/>*/}
            {/*<AddServices/>*/}


        </>
    );
}

export default Homepage;