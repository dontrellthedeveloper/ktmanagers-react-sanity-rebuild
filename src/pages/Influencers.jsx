import React from 'react';
import {useEffect, useState} from "react";
import {client, urlFor} from "../client";
import {Link} from "react-router-dom";
import videoBgMp4 from "../assets/KT-Management-home-screen-video-city.mp4";
import './scss/Influencers.scss';
import {Brands, Stats} from "../container";

function Influencers() {
    const [influencers, setInfluencers] = useState([]);
    const [filterInfluencers, setFilterInfluencers] = useState([]);
    const [activeFilter, setActiveFilter] = useState('All');

    useEffect(() => {
        const query = '*[_type == "influencer"] | order(order asc)';

        client.fetch(query)
            .then((data) => {
                setInfluencers(data)
                setFilterInfluencers(data)
            })

    },[])

    if(!influencers) return (
        <div className="preloader">
            <div className="status"></div>
        </div>
    )




    // const handleWorkFilter = (item) => {
    //     setActiveFilter(item)
    //
    //     setTimeout(() => {
    //
    //
    //         if(item === 'All') {
    //             setFilterInfluencers(influencers);
    //         } else {
    //             setFilterInfluencers(influencers.filter((influencer) => influencer.tags.includes(item)))
    //         }
    //     }, 500)
    // }




    return (

        <>
            <section id="home-4">
                <video className="home-bg-video" src={videoBgMp4} autoPlay loop muted playsInline>
                </video>

                <div id="home-overlay-2"></div>
            </section>

            <div className="map-color-3">
                <div className="">
                    <div className="home-headings tools-p-align">
                        <div className="horizontal-heading influencer-name">
                            <h1 className="home-headings-2 influencer-name-h1"><span className='influencer-name-span'> Influencers</span></h1>
                        </div>
                    </div>
                </div>
            </div>

            <section id="portfolio">

                <div className="isotope-filters">
                    <div className="container">
                        {/*<div className="row">*/}
                        {/*    <div className="col-md-12">*/}
                        {/*        <div className="vertical-heading">*/}
                        {/*            <h5>Find Branding</h5>*/}
                        {/*            <h2>Our <br/>Amazing <strong>Influencers</strong></h2>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}

                        {/*    <div className="col-md-12">*/}

                        {/*        <div id="isotope-filters" className="margin-bottom-g">*/}


                        {/*            /!*{['All','Women','Men'].map((item, index) => (*!/*/}

                        {/*            /!*    <button*!/*/}
                        {/*            /!*        key={index}*!/*/}
                        {/*            /!*        onClick={() => handleWorkFilter(item)}*!/*/}
                        {/*            /!*        className={`btn btn-red btn-grey gallery-list-item ${activeFilter === item ? 'item-active active-item': ''}`}*!/*/}
                        {/*            /!*        data-filter="all">*!/*/}
                        {/*            /!*        <span>{item}</span>*!/*/}
                        {/*            /!*    </button>*!/*/}
                        {/*            /!*))}*!/*/}
                        {/*            /!*<button className="btn btn-red gallery-list-item" data-filter="women">*!/*/}
                        {/*            /!*    <span>Women</span>*!/*/}
                        {/*            /!*</button>*!/*/}
                        {/*            /!*<button className="btn btn-red active-item gallery-list-item" data-filter="men">*!/*/}
                        {/*            /!*    <span>Men</span>*!/*/}
                        {/*            /!*</button>*!/*/}


                        {/*        </div>*/}
                        {/*        */}

                        {/*    </div>*/}
                        {/*    <div className="col-md-12">*/}
                        {/*        <p className="client-show-instructions">Click on photo for details</p>*/}
                        {/*    </div>*/}

                        {/*</div>*/}
                    </div>

                    {/* Portfolio items Wrapper */}
                    <section id="portfolio-wrapper">

                        <div className="container-fluid center-pics">

                            <div className="row no-gutters">

                                <div className="isotope-filters" style={{paddingLeft: '0', paddingRight: '0'}}>

                                    {influencers.map((influencer, index) => (


                                        <div key={index} className="col-lg-2 col-md-3 col-sm-6 col-xs-12 div-size filter women client-custom">

                                            <div className="portfolio-item portfolio-pic no-underline">



                                                <Link to={'/' + influencer.slug.current}

                                                >
                                                    <img src={urlFor(influencer.imageUrl)} className="img-responsive"
                                                         alt="portfolio 01"/>

                                                    <div className="portfolio-item-overlay margin-top-g">
                                                        <div className="portfolio-item-details text-center">
                                                            {/*Item Header*/}
                                                            <h3>{influencer.name}</h3>

                                                            {/*Item Strips*/}
                                                            <span></span>

                                                            {/*Item Description */}
                                                            <p>{influencer.description}</p>

                                                        </div>
                                                    </div>

                                                </Link>
                                            </div>
                                        </div>

                                    ))}

                                    {/*<Gallery withCaption>*/}
                                    {/*    <div className="col-lg-2 col-md-3 col-sm-6 col-xs-12 div-size filter women client-custom">*/}

                                    {/*        <div className="portfolio-item portfolio-pic no-underline">*/}

                                    {/*            <Item*/}
                                    {/*                original={images.clientTemp}*/}
                                    {/*                thumbnail={images.clientTemp}*/}
                                    {/*                width="800"*/}
                                    {/*                height="800"*/}
                                    {/*                caption="<div className='show-button'><a href='mailto:shawn@ktmanagers.com?subject=I am interested in Mimi promoting my brand' target='_blank'><button className='btn btn-client-book btn-red'>Book Mimi to promote your brand!</button></a><hr><a href='https://www.instagram.com/mimifaust' target='_blank'><button className='btn btn-social-i btn-instagram'><i className='fa fa-instagram'></i></button></a><a href='https://www.facebook.com/officialmimifaust' target='_blank'><button className='btn btn-social-i-f btn-facebook'><i className='fa fa-facebook'></i></button></a><a href='https://twitter.com/mimifaust' target='_blank'><button className='btn btn-social-i-t btn-twitter'><i className='fa fa-twitter'></i></button></a></div><hr>"*/}
                                    {/*            >*/}
                                    {/*                {({ ref, open }) => (*/}
                                    {/*                    <>*/}
                                    {/*                        <img ref={ref} onClick={open} src={images.clientTemp} />*/}

                                    {/*                    </>*/}
                                    {/*                )}*/}

                                    {/*            </Item>*/}
                                    {/*            */}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*        */}
                                    {/*</Gallery>*/}



                                </div>
                            </div>
                        </div>
                    </section>
                </div>








                {/*<div className="client-border">*/}
                {/*    <div className="container">*/}
                {/*        <div className="row">*/}
                {/*            <div className="col-md-12">*/}
                {/*                <div className="vertical-heading">*/}
                {/*                    <h5>Find Branding</h5>*/}
                {/*                    <h2>Our <br/>Amazing <strong>Kids</strong></h2>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div className="col-md-12">*/}
                {/*                <p className="client-show-instructions">Click on photo for details</p>*/}
                {/*            </div>*/}
                {/*            <div className="col-md-12">*/}

                {/*                <div className="margin-bottom-g">*/}

                {/*                </div>*/}

                {/*            </div>*/}

                {/*        </div>*/}
                {/*    </div>*/}

                {/*</div>*/}
            </section>

            {/*<Stats/>*/}
            {/*<Brands/>*/}


        </>

    );
}

export default Influencers;