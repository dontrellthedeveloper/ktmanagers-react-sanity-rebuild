import React from 'react';
import {useEffect, useState} from "react";
import {client, urlFor} from "../client";
import {Link} from "react-router-dom";
import videoBgMp4 from "../assets/KT-Management-home-screen-video-city-compressed.mp4";
import './scss/Influencers.scss';
import {Helmet} from "react-helmet";

function Services() {
    const [services, setServices] = useState([]);

    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 40);
        });
        return () => {
            window.removeEventListener('scroll', () => {
                setScroll(false);
            })
        }
    }, []);

    useEffect(() => {
        const query = '*[_type == "services"] | order(order asc)';



        client.fetch(query)
            .then((data) => {
                setServices(data)
            });
        return () => {
            setServices([])
        }
    },[])

    if(!services) return (
        <div className="preloader">
            <div className="status"></div>
        </div>
    )

    return (

        <>
            <Helmet>
                <title>Additional Services</title>
                <meta
                    name='description'
                    content='Additional services we offer'
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="%PUBLIC_URL%/logo152.png"
                />
            </Helmet>
            <section id="home-4">
                <video className="home-bg-video" src={videoBgMp4} autoPlay loop muted playsInline>
                </video>

                <div id="home-overlay-2"></div>
            </section>


            <div className="map-color-3">
                <div className="">
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


                                    {/*sticky footer*/}
                                    <div className={scroll ? 'map-color-3 influencer-handle-mobile-scroll' : 'map-color-3 influencer-handle-mobile' }>
                                        <div className="row">
                                            <div className="home-headings tools-p-align">
                                                <div className="horizontal-heading influencer-name">
                                                    <h1 className="home-headings-2 influencer-name-h1"><span className='influencer-name-span'> Services</span></h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </section>
                </div>


            </section>


        </>

    );
}

export default Services;