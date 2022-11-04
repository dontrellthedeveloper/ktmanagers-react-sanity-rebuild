import React from 'react';
import {useEffect, useState} from "react";
import {client, urlFor} from "../client";
import {Link} from "react-router-dom";
import videoBgMp4 from "../assets/KT-Management-home-screen-video-city-compressed.mp4";
import './scss/Influencer.scss';
import {Brands} from "../container";
import {Helmet} from "react-helmet";

function Mascots() {
    const [mascots, setMascots] = useState([]);

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
        const query = '*[_type == "mascot"] | order(order asc)';



        client.fetch(query)
            .then((data) => {
                setMascots(data)
            });
        return () => {
            setMascots([])
        }
    },[])

    if(!mascots) return (
        <div className="preloader">
            <div className="status"></div>
        </div>
    )

    return (

        <>
            <Helmet>
                <title>Our Mascots</title>
                <meta
                    name='description'
                    content='Our company mascots'
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
                            <h1 className="home-headings-2 influencer-name-h1"><span className='influencer-name-span'> Mascots</span></h1>
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

                                <div className="isotope-filters" style={{paddingLeft: '0', paddingRight: '0', textAlign: 'center'}}>

                                    {mascots.map((mascot, index) => (


                                        <div key={mascot.name + index} className="col-lg-3 col-md-3 col-sm-6 col-xs-12 div-size filter women client-custom">

                                            <div className="portfolio-item portfolio-pic no-underline">



                                                <Link to={'/mascot/' + mascot.slug.current}

                                                >
                                                    <img src={urlFor(mascot.imageUrl)} className="img-responsive"
                                                         alt="portfolio 01"/>

                                                    <div className="portfolio-item-overlay margin-top-g">
                                                        <div className="portfolio-item-details text-center">
                                                            {/*Item Header*/}
                                                            <h3>{mascot.name}</h3>

                                                            {/*Item Strips*/}
                                                            <span></span>

                                                            {/*Item Description */}
                                                            <p>{mascot.description}</p>

                                                        </div>
                                                    </div>

                                                </Link>
                                            </div>
                                        </div>

                                    ))}





                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </section>



            {/*sticky footer*/}
            <div className={scroll ? 'map-color-3 influencer-handle-mobile-scroll' : 'map-color-3 influencer-handle-mobile' }>
                <div className="row">
                    <div className="home-headings tools-p-align">
                        <div className="horizontal-heading influencer-name">
                            <h1 className="home-headings-2 influencer-name-h1"><span className='influencer-name-span'> Mascots</span></h1>
                        </div>
                    </div>
                </div>
            </div>


            {/*<Brands/>*/}
        </>

    );
}

export default Mascots;