import React, {useState, useEffect} from 'react';
import {
    FaFacebookF, FaHandPointRight,
    FaInstagram,
    FaTiktok,
    FaTwitter,
    FaYoutube
} from "react-icons/fa";
import {client, urlFor} from "../client";
import {Link, useParams} from "react-router-dom";
import {images} from "../constants";

import './scss/Influencer.scss';

import {Services} from "../container";


import OwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {BiCaretRight, BiRightArrow} from "react-icons/bi";
import videoBgMp4 from "../assets/KT-Management-home-screen-video-city.mp4";





function Influencer() {
    const [singleInfluencer, setSingleInfluencer] = useState(null);
    const [services, setServices] = useState(null);
    const {slug} = useParams();

    const options = {
        responsive:{
            0: {
                items: 1
            },
            // 480: {
            //     items: 2
            // },
            768: {
                items: 3
            }
        }
    };



    useEffect(() => {
        client.fetch(`*[slug.current == "${slug}"]{
            name,
            _id,
            slug,
            instagramLink,
            facebookLink,
            twitterLink,
            youtubeLink,
            tiktokLink,
            description,
            imageUrl{
                asset->{
                    _id,
                    url
                }
            },
            imageUrl2{
                asset->{
                    _id,
                    url
                }
            },
            imageUrl3{
                asset->{
                    _id,
                    url
                }
            },
            imageUrl4{
                asset->{
                    _id,
                    url
                }
            },
            imageUrl5{
                asset->{
                    _id,
                    url
                }
            },
            imageUrl6{
                asset->{
                    _id,
                    url
                }
            }
        }`).then((data) => setSingleInfluencer(data[0]))
            .catch(console.error)
    }, [slug]);






    useEffect(() => {
        client.fetch(`*[_type == "service"] | order(order asc)`

        ).then((data) => {
            setServices(data)
        })

    }, []);






    if(!singleInfluencer || !services) return (
        <div className="preloader">
            <div className="status"></div>
        </div>
    )
    // if(!services) return <div>Loading.....</div>


    return (
        <>

            <section id="home-4">
                <video className="home-bg-video" src={videoBgMp4} autoPlay loop muted playsInline>
                </video>

                <div id="home-overlay-2"></div>
            </section>

            <section id="">
                <div className="content-box-md-interact">
                    <div className="">

                        <div className="map-color-3">
                            <div className="row">
                                <div className="home-headings tools-p-align">
                                    <div className="horizontal-heading influencer-name">
                                        <h1 className="home-headings-2 influencer-name-h1"><span className='influencer-name-span'> @{singleInfluencer.slug.current}</span></h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="map-color-6">
                            <div className="container">
                                <div className="row">
                                    <div id="content">
                                        <section id="map-section" className="inner over client-section-b">
                                            {/*<ul id="examples-2">*/}
                                            {/*    <li><Link to='/'*/}
                                            {/*           className="background-map-2">&#8592; Back to All Influencers</Link>*/}
                                            {/*    </li>*/}
                                            {/*</ul>*/}

                                            {/*<hr/>*/}


                                                <div className="row-show port-popup show-page-image-s">
                                                    {singleInfluencer.imageUrl2 && (
                                                        <div className="mobile__hide-image column-show map-color-7 influencer-image"
                                                             >
                                                            <img src={urlFor(singleInfluencer.imageUrl2).width(800).height(800).url()} className="influencer-image-2"
                                                                 alt=""/>

                                                        </div>
                                                    )}
                                                    <div className="column-show map-color-7 influencer-image"
                                                    >
                                                        <img src={urlFor(singleInfluencer.imageUrl).width(800).height(800).url()} className="influencer-image-2"
                                                             alt=""/>

                                                    </div>

                                                    {singleInfluencer.imageUrl3 && (
                                                    <div className="mobile__hide-image column-show map-color-7 influencer-image"
                                                    >
                                                        <img src={urlFor(singleInfluencer.imageUrl3).width(800).height(800).url()} className="influencer-image-2"
                                                             alt=""/>

                                                    </div>
                                                    )}
                                                    {/*</a>*/}
                                                </div>








                                                <div className="desc map-color-7 container-paragraph influencer-info">
                                                    <div className="map-paragraph">
                                                        <h2 className="i-map-paragraph"><b className='show-page-name-s'>{singleInfluencer.name}</b></h2>
                                                        {/*<hr className='show-break-style'/>*/}
                                                        <div className='show-button'>


                                                            {singleInfluencer.instagramLink && (
                                                                <a href={singleInfluencer.instagramLink} target='_blank'>
                                                                    <button className='btn btn-social-i btn-instagram'>
                                                                        <FaInstagram/>
                                                                    </button>
                                                                </a>
                                                            )}

                                                            {singleInfluencer.facebookLink && (
                                                                <a href={singleInfluencer.facebookLink} target='_blank'>
                                                                    <button className='btn btn-social-i-f btn-facebook'>
                                                                        <FaFacebookF/>
                                                                    </button>
                                                                </a>
                                                            )}

                                                            {singleInfluencer.twitterLink && (
                                                                <a href={singleInfluencer.twitterLink} target='_blank'>
                                                                    <button className='btn btn-social-i-t btn-twitter'>
                                                                        <FaTwitter/>
                                                                    </button>
                                                                </a>
                                                            )}

                                                            {singleInfluencer.youtubeLink && (
                                                                <a href={singleInfluencer.youtubeLink}
                                                                   target='_blank'>
                                                                    <button className='btn btn-social-i-y btn-youtube'>
                                                                        <FaYoutube/>
                                                                    </button>
                                                                </a>
                                                            )}

                                                            {singleInfluencer.tiktokLink && (
                                                                <a href={singleInfluencer.tiktokLink}
                                                                   target='_blank'>
                                                                    <button className='btn btn-social-i btn-tiktok'>
                                                                        <FaTiktok/>
                                                                    </button>
                                                                </a>
                                                            )}

                                                            <hr />

                                                            <div className='template-p-detail'>
                                                                {singleInfluencer.description}
                                                            </div>

                                                            <hr/>
                                                            <a
                                                                // target="_blank"
                                                                // href={`mailto:shawn@ktmanagers.com?subject=I am interested in ${singleInfluencer.name} promoting my brand`} rel="noopener noreferrer">
                                                                href='#contact'>
                                                                <button  className='btn btn-client-book btn-red'>Book @{singleInfluencer.slug.current} Promo!</button>
                                                            </a>

                                                            {/*<ButtonMailto label="Write me an E-Mail" mailto="mailto:shawn@ktmanagers.com"/>*/}

                                                            {/*<Mailto email="shawn@ktmanagers.com" >*/}
                                                            {/*    Mail me!*/}
                                                            {/*</Mailto>*/}
                                                        </div>










                                                            {/*<hr/>*/}
                                                        <hr className='show-break-style'/>
                                                            <div className='template-p-detail'>

                                                                More information?
                                                                    Please contact <a
                                                                className='email__design-s'
                                                                        href='mailto:shawn@ktmanagers.com'
                                                                        target='_blank'>shawn@ktmanagers.com</a>
                                                            </div>


                                                    </div>
                                                </div>


                                            <div className="row-show port-popup show-page-image-s">
                                                {singleInfluencer.imageUrl4 && (
                                                    <div className="mobile__hide-image column-show map-color-7 influencer-image"
                                                    >
                                                        <img src={urlFor(singleInfluencer.imageUrl4).width(800).height(800).url()} className="influencer-image-2"
                                                             alt=""/>

                                                    </div>
                                                )}
                                                {singleInfluencer.imageUrl5 && (
                                                    <div className="mobile__hide-image column-show map-color-7 influencer-image"
                                                    >
                                                        <img src={urlFor(singleInfluencer.imageUrl5).width(800).height(800).url()} className="influencer-image-2"
                                                             alt=""/>

                                                    </div>
                                                )}

                                                {singleInfluencer.imageUrl6 && (
                                                    <div className="mobile__hide-image column-show map-color-7 influencer-image"
                                                    >
                                                        <img src={urlFor(singleInfluencer.imageUrl6).width(800).height(800).url()} className="influencer-image-2"
                                                             alt=""/>

                                                    </div>
                                                )}
                                                {/*</a>*/}
                                            </div>


                                            {/* Services Component */}
                                            <Services/>

                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

















            {/*<section id="about">*/}

            {/*    /!* About 01 *!/*/}
            {/*    <div className="about-01">*/}
            {/*        <div className="content-box-main">*/}
            {/*            <div className="container">*/}

            {/*                /!* About Bottom *!/*/}
            {/*                <div className="row">*/}
            {/*                    <div className="col-md-12">*/}
            {/*                        <div className="about-bottom">*/}
            {/*                            <img src={urlFor(singleInfluencer.imageUrl).width(400).height(400).url()} alt="About Us" className="img-responsive"/>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*    /!* About 02 *!/*/}

            {/*</section>*/}


        </>
    );
}

export default Influencer;