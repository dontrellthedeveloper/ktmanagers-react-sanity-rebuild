import React from 'react';
import {useEffect, useState} from "react";
import {client, urlFor} from "../client";
import {Link} from "react-router-dom";
import videoBgMp4 from "../assets/KT-Management-home-screen-video-city-compressed.mp4";
import './scss/Influencers.scss';
import {Brands, Stats} from "../container";

function Influencers() {
    const [influencers, setInfluencers] = useState([]);
    const [filterInfluencers, setFilterInfluencers] = useState([]);
    const [activeFilter, setActiveFilter] = useState('All');

    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50);
        });
    }, []);



    useEffect(() => {
        const query = '*[_type == "influencer"] | order(order asc)';

        client.fetch(query)
            .then((data) => {
                setInfluencers(data)
                // setFilterInfluencers(data)
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
                                                            <p className='influencer-description'>{influencer.description}</p>

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
                            <h1 className="home-headings-2 influencer-name-h1"><span className='influencer-name-span'> Influencers</span></h1>
                        </div>
                    </div>
                </div>
            </div>

            {/*<Stats/>*/}
            {/*<Brands/>*/}


        </>

    );
}

export default Influencers;