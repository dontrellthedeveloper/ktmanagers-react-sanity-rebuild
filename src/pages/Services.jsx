import React from 'react';
import {useEffect, useState} from "react";
import {client, urlFor} from "../client";
import {Link} from "react-router-dom";
import videoBgMp4 from "../assets/KT-Management-home-screen-video-city.mp4";
import './scss/Influencers.scss';

function Services() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const query = '*[_type == "services"] | order(order asc)';



        client.fetch(query)
            .then((data) => {
                setServices(data)
            })

    },[])

    if(!services) return (
        <div className="preloader">
            <div className="status"></div>
        </div>
    )

    return (

        <>
            <section id="home-4">
                <video className="home-bg-video" src={videoBgMp4} autoPlay loop muted playsInline>
                </video>

                <div id="home-overlay-2"></div>
            </section>


            <div className="map-color-3">
                <div className="row">
                    <div className="home-headings tools-p-align">
                        <div className="horizontal-heading influencer-name">
                            <h1 className="home-headings-2 influencer-name-h1"><span className='influencer-name-span'> Services</span></h1>
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
                        {/*            <h5>Find Services</h5>*/}
                        {/*            <h2>Our <br/>Amazing <strong>Services</strong></h2>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}

                        {/*    <div className="col-md-12">*/}

                        {/*        /!*<div id="isotope-filters" className="margin-bottom-g">*!/*/}

                        {/*        /!*    <button className="btn btn-red btn-grey active-item gallery-list-item"*!/*/}
                        {/*        /!*            data-filter="all"><span>All</span></button>*!/*/}
                        {/*        /!*    <button className="btn btn-red gallery-list-item" data-filter="women"><span>Women</span>*!/*/}
                        {/*        /!*    </button>*!/*/}
                        {/*        /!*    <button className="btn btn-red active-item gallery-list-item" data-filter="men">*!/*/}
                        {/*        /!*        <span>Men</span></button>*!/*/}
                        {/*        /!*</div>*!/*/}

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

                                    {services.map((service, index) => (


                                        <div key={service.name + index} className="col-lg-2 col-md-3 col-sm-6 col-xs-12 div-size filter women client-custom">

                                            <div className="portfolio-item portfolio-pic no-underline">



                                                <Link to={'/service/' + service.slug.current}

                                                >
                                                    <img src={urlFor(service.imageUrl)} className="img-responsive"
                                                         alt="portfolio 01"/>

                                                    <div className="portfolio-item-overlay margin-top-g">
                                                        <div className="portfolio-item-details text-center">
                                                            {/*Item Header*/}
                                                            <h3>{service.name}</h3>

                                                            {/*Item Strips*/}
                                                            <span></span>

                                                            {/*Item Description */}
                                                            <p>@{service.slug.current}</p>

                                                        </div>
                                                    </div>

                                                    <div className='portfolio-item-overlay-service'>
                                                        <h3>{service.job}</h3>
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


        </>

    );
}

export default Services;