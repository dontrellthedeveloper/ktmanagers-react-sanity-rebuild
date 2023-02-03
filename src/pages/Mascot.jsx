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
import videoBgMp4 from "../assets/KT-Management-home-screen-video-city-compressed.mp4";
import {Helmet} from "react-helmet";





function Mascot() {
    const [singleMascot, setSingleMascot] = useState(null);
    const [services, setServices] = useState(null);
    const {slug} = useParams();

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
            imageTitle,
            imageDescription,
            imageTitle2,
            imageDescription2,
            imageTitle3,
            imageDescription3,
            imageTitle4,
            imageDescription4,
            imageTitle5,
            imageDescription5,
            imageTitle6,
            imageDescription6,
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
        }`).then((data) => setSingleMascot(data[0]))
            .catch(console.error)
    }, [slug]);






    useEffect(() => {
        client.fetch(`*[_type == "service"] | order(order asc)`

        ).then((data) => {
            setServices(data)
        })

    }, []);






    if(!singleMascot || !services) return (
        <div className="preloader">
            <div className="status"></div>
        </div>
    )
    // if(!services) return <div>Loading.....</div>


    return (
        <>
            <Helmet>
                <title>{singleMascot.name}</title>
                <meta
                    name='description'
                    content={singleMascot.description}
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    // href="%PUBLIC_URL%/logo152.png"
                    href={urlFor(singleMascot.imageUrl).width(800).height(800).url()}
                />
            </Helmet>
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
                                        <h1 className="home-headings-2 influencer-name-h1"><span className='influencer-name-span'> @{singleMascot.slug.current}</span></h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="map-color-6">
                            <div className="container">
                                <div className="row">
                                    <div id="content" className='influencer-single-page__mobile-img'>
                                        <section id="map-section" className="inner over client-section-b">



                                            <div className="row-show port-popup show-page-image-s">


                                                {singleMascot.imageUrl && (
                                                    <div className='influencer-image__show-on-mobile column-show map-color-7 influencer-image'>
                                                        <div className="portfolio-item">
                                                            <img src={urlFor(singleMascot.imageUrl).width(800).height(800).url()} className="influencer-image-2" alt=""/>

                                                            <div className="portfolio-item-overlay margin-top-g">
                                                                <div className="portfolio-item-details text-center">
                                                                    {/*Item Header*/}
                                                                    {singleMascot.imageTitle && (
                                                                        <>
                                                                            <h3>{singleMascot.imageTitle}</h3>
                                                                            {/*Item Strips*/}
                                                                            <span></span>
                                                                        </>

                                                                    )}

                                                                    {/*Item Description */}
                                                                    {singleMascot.imageDescription && (
                                                                        <p className='influencer-description'>{singleMascot.imageDescription}</p>
                                                                    )}

                                                                    <div className='show-button'>

                                                                        {singleMascot.instagramLink && (
                                                                            <a href={singleMascot.instagramLink} target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img btn-social-instagram'>
                                                                                    <FaInstagram/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                        {singleMascot.facebookLink && (
                                                                            <a href={singleMascot.facebookLink} target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img
                                                                                    btn-social-facebook'>
                                                                                    <FaFacebookF/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                        {singleMascot.twitterLink && (
                                                                            <a href={singleMascot.twitterLink} target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img
                                                                                    btn-social-twitter'>
                                                                                    <FaTwitter/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                        {singleMascot.youtubeLink && (
                                                                            <a href={singleMascot.youtubeLink}
                                                                               target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img
                                                                                    btn-social-youtube'>
                                                                                    <FaYoutube/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                        {singleMascot.tiktokLink && (
                                                                            <a href={singleMascot.tiktokLink}
                                                                               target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img
                                                                                    btn-social-tiktok'>
                                                                                    <FaTiktok/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                    </div>
                                                                </div>
                                                            </div>


                                                        </div>
                                                    </div>

                                                )}


                                                {singleMascot.imageUrl2 && (
                                                    <div className="mobile__hide-image column-show map-color-7 influencer-image">
                                                        <div className="portfolio-item">
                                                            <img src={urlFor(singleMascot.imageUrl2).width(800).height(800).url()} className="influencer-image-2" alt=""/>

                                                            <div className="portfolio-item-overlay margin-top-g">
                                                                <div className="portfolio-item-details text-center">
                                                                    {/*Item Header*/}
                                                                    {singleMascot.imageTitle2 && (
                                                                        <>
                                                                            <h3>{singleMascot.imageTitle2}</h3>
                                                                            {/*Item Strips*/}
                                                                            <span></span>
                                                                        </>

                                                                    )}

                                                                    {/*Item Description */}
                                                                    {singleMascot.imageDescription2 && (
                                                                        <p className='influencer-description'>{singleMascot.imageDescription2}</p>
                                                                    )}

                                                                    <div className='show-button'>

                                                                        {singleMascot.instagramLink && (
                                                                            <a href={singleMascot.instagramLink} target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img btn-social-instagram'>
                                                                                    <FaInstagram/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                        {singleMascot.facebookLink && (
                                                                            <a href={singleMascot.facebookLink} target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img
                                                                                    btn-social-facebook'>
                                                                                    <FaFacebookF/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                        {singleMascot.twitterLink && (
                                                                            <a href={singleMascot.twitterLink} target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img
                                                                                    btn-social-twitter'>
                                                                                    <FaTwitter/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                        {singleMascot.youtubeLink && (
                                                                            <a href={singleMascot.youtubeLink}
                                                                               target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img
                                                                                    btn-social-youtube'>
                                                                                    <FaYoutube/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                        {singleMascot.tiktokLink && (
                                                                            <a href={singleMascot.tiktokLink}
                                                                               target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img
                                                                                    btn-social-tiktok'>
                                                                                    <FaTiktok/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>


                                                    </div>
                                                )}


                                                {singleMascot.imageUrl && (
                                                    <div className='influencer-image__hide-on-mobile column-show map-color-7 influencer-image'>
                                                        <div className="portfolio-item">
                                                            <img src={urlFor(singleMascot.imageUrl).width(800).height(800).url()} className="influencer-image-2" alt=""/>

                                                            <div className="portfolio-item-overlay margin-top-g">
                                                                <div className="portfolio-item-details text-center">
                                                                    {/*Item Header*/}
                                                                    {singleMascot.imageTitle && (
                                                                        <>
                                                                            <h3>{singleMascot.imageTitle}</h3>
                                                                            {/*Item Strips*/}
                                                                            <span></span>
                                                                        </>

                                                                    )}

                                                                    {/*Item Description */}
                                                                    {singleMascot.imageDescription && (
                                                                        <p className='influencer-description'>{singleMascot.imageDescription}</p>
                                                                    )}

                                                                    <div className='show-button'>

                                                                        {singleMascot.instagramLink && (
                                                                            <a href={singleMascot.instagramLink} target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img btn-social-instagram'>
                                                                                    <FaInstagram/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                        {singleMascot.facebookLink && (
                                                                            <a href={singleMascot.facebookLink} target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img
                                                                                    btn-social-facebook'>
                                                                                    <FaFacebookF/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                        {singleMascot.twitterLink && (
                                                                            <a href={singleMascot.twitterLink} target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img
                                                                                    btn-social-twitter'>
                                                                                    <FaTwitter/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                        {singleMascot.youtubeLink && (
                                                                            <a href={singleMascot.youtubeLink}
                                                                               target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img
                                                                                    btn-social-youtube'>
                                                                                    <FaYoutube/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                        {singleMascot.tiktokLink && (
                                                                            <a href={singleMascot.tiktokLink}
                                                                               target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img
                                                                                    btn-social-tiktok'>
                                                                                    <FaTiktok/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                    </div>
                                                                </div>
                                                            </div>


                                                        </div>
                                                    </div>

                                                )}


                                                {singleMascot.imageUrl3 && (
                                                    <div className="mobile__hide-image column-show map-color-7 influencer-image">
                                                        <div className="portfolio-item">
                                                            <img src={urlFor(singleMascot.imageUrl3).width(800).height(800).url()} className="influencer-image-2" alt=""/>

                                                            <div className="portfolio-item-overlay margin-top-g">
                                                                <div className="portfolio-item-details text-center">
                                                                    {/*Item Header*/}
                                                                    {singleMascot.imageTitle3 && (
                                                                        <>
                                                                            <h3>{singleMascot.imageTitle3}</h3>
                                                                            {/*Item Strips*/}
                                                                            <span></span>
                                                                        </>

                                                                    )}

                                                                    {/*Item Description */}
                                                                    {singleMascot.imageDescription3 && (
                                                                        <p className='influencer-description'>{singleMascot.imageDescription3}</p>
                                                                    )}

                                                                    <div className='show-button'>

                                                                        {singleMascot.instagramLink && (
                                                                            <a href={singleMascot.instagramLink} target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img btn-social-instagram'>
                                                                                    <FaInstagram/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                        {singleMascot.facebookLink && (
                                                                            <a href={singleMascot.facebookLink} target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img
                                                                                    btn-social-facebook'>
                                                                                    <FaFacebookF/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                        {singleMascot.twitterLink && (
                                                                            <a href={singleMascot.twitterLink} target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img
                                                                                    btn-social-twitter'>
                                                                                    <FaTwitter/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                        {singleMascot.youtubeLink && (
                                                                            <a href={singleMascot.youtubeLink}
                                                                               target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img
                                                                                    btn-social-youtube'>
                                                                                    <FaYoutube/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                        {singleMascot.tiktokLink && (
                                                                            <a href={singleMascot.tiktokLink}
                                                                               target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img
                                                                                    btn-social-tiktok'>
                                                                                    <FaTiktok/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                )}
                                                {/*</a>*/}
                                            </div>


                                            <div className="row-show port-popup show-page-image-s">
                                                {singleMascot.imageUrl4 && (
                                                    <div className="column-show map-color-7 influencer-image">
                                                        <div className="portfolio-item">
                                                            <img src={urlFor(singleMascot.imageUrl4).width(800).height(800).url()} className="influencer-image-2" alt=""/>

                                                            <div className="portfolio-item-overlay margin-top-g">
                                                                <div className="portfolio-item-details text-center">
                                                                    {/*Item Header*/}
                                                                    {singleMascot.imageTitle4 && (
                                                                        <>
                                                                            <h3>{singleMascot.imageTitle4}</h3>
                                                                            {/*Item Strips*/}
                                                                            <span></span>
                                                                        </>

                                                                    )}

                                                                    {/*Item Description */}
                                                                    {singleMascot.imageDescription4 && (
                                                                        <p className='influencer-description'>{singleMascot.imageDescription4}</p>
                                                                    )}

                                                                    <div className='show-button'>

                                                                        {singleMascot.instagramLink && (
                                                                            <a href={singleMascot.instagramLink} target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img btn-social-instagram'>
                                                                                    <FaInstagram/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                        {singleMascot.facebookLink && (
                                                                            <a href={singleMascot.facebookLink} target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img
                                                                                    btn-social-facebook'>
                                                                                    <FaFacebookF/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                        {singleMascot.twitterLink && (
                                                                            <a href={singleMascot.twitterLink} target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img
                                                                                    btn-social-twitter'>
                                                                                    <FaTwitter/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                        {singleMascot.youtubeLink && (
                                                                            <a href={singleMascot.youtubeLink}
                                                                               target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img
                                                                                    btn-social-youtube'>
                                                                                    <FaYoutube/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                        {singleMascot.tiktokLink && (
                                                                            <a href={singleMascot.tiktokLink}
                                                                               target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img
                                                                                    btn-social-tiktok'>
                                                                                    <FaTiktok/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                                {singleMascot.imageUrl5 && (
                                                    <div className="mobile__hide-image column-show map-color-7 influencer-image">
                                                        <div className="portfolio-item">
                                                            <img src={urlFor(singleMascot.imageUrl5).width(800).height(800).url()} className="influencer-image-2" alt=""/>

                                                            <div className="portfolio-item-overlay margin-top-g">
                                                                <div className="portfolio-item-details text-center">
                                                                    {/*Item Header*/}
                                                                    {singleMascot.imageTitle5 && (
                                                                        <>
                                                                            <h3>{singleMascot.imageTitle5}</h3>
                                                                            {/*Item Strips*/}
                                                                            <span></span>
                                                                        </>

                                                                    )}

                                                                    {/*Item Description */}
                                                                    {singleMascot.imageDescription5 && (
                                                                        <p className='influencer-description'>{singleMascot.imageDescription5}</p>
                                                                    )}

                                                                    <div className='show-button'>

                                                                        {singleMascot.instagramLink && (
                                                                            <a href={singleMascot.instagramLink} target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img btn-social-instagram'>
                                                                                    <FaInstagram/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                        {singleMascot.facebookLink && (
                                                                            <a href={singleMascot.facebookLink} target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img
                                                                                    btn-social-facebook'>
                                                                                    <FaFacebookF/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                        {singleMascot.twitterLink && (
                                                                            <a href={singleMascot.twitterLink} target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img
                                                                                    btn-social-twitter'>
                                                                                    <FaTwitter/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                        {singleMascot.youtubeLink && (
                                                                            <a href={singleMascot.youtubeLink}
                                                                               target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img
                                                                                    btn-social-youtube'>
                                                                                    <FaYoutube/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                        {singleMascot.tiktokLink && (
                                                                            <a href={singleMascot.tiktokLink}
                                                                               target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img
                                                                                    btn-social-tiktok'>
                                                                                    <FaTiktok/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                )}


                                                {singleMascot.imageUrl6 && (
                                                    <div className="mobile__hide-image column-show map-color-7 influencer-image">
                                                        <div className="portfolio-item">
                                                            <img src={urlFor(singleMascot.imageUrl6).width(800).height(800).url()} className="influencer-image-2" alt=""/>

                                                            <div className="portfolio-item-overlay margin-top-g">
                                                                <div className="portfolio-item-details text-center">
                                                                    {/*Item Header*/}
                                                                    {singleMascot.imageTitle6 && (
                                                                        <>
                                                                            <h3>{singleMascot.imageTitle6}</h3>
                                                                            {/*Item Strips*/}
                                                                            <span></span>
                                                                        </>
                                                                    )}

                                                                    {/*Item Description */}
                                                                    {singleMascot.imageDescription6 && (
                                                                        <p className='influencer-description'>{singleMascot.imageDescription6}</p>
                                                                    )}

                                                                    <div className='show-button'>

                                                                        {singleMascot.instagramLink && (
                                                                            <a href={singleMascot.instagramLink} target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img btn-social-instagram'>
                                                                                    <FaInstagram/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                        {singleMascot.facebookLink && (
                                                                            <a href={singleMascot.facebookLink} target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img
                                                                                    btn-social-facebook'>
                                                                                    <FaFacebookF/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                        {singleMascot.twitterLink && (
                                                                            <a href={singleMascot.twitterLink} target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img
                                                                                    btn-social-twitter'>
                                                                                    <FaTwitter/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                        {singleMascot.youtubeLink && (
                                                                            <a href={singleMascot.youtubeLink}
                                                                               target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img
                                                                                    btn-social-youtube'>
                                                                                    <FaYoutube/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                        {singleMascot.tiktokLink && (
                                                                            <a href={singleMascot.tiktokLink}
                                                                               target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img
                                                                                    btn-social-tiktok'>
                                                                                    <FaTiktok/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                                {/*</a>*/}
                                            </div>




                                            <div className="desc map-color-7 container-paragraph influencer-info">
                                                <div className="map-paragraph">

                                                    {singleMascot.name && (
                                                        <h2 className="i-map-paragraph"><b className='show-page-name-s'>{singleMascot.name}</b></h2>
                                                    )}

                                                    <div className='show-button'>

                                                        {singleMascot.instagramLink && (
                                                            <a href={singleMascot.instagramLink} target='_blank'>
                                                                <button className='btn btn-social-i btn-instagram'>
                                                                    <FaInstagram/>
                                                                </button>
                                                            </a>
                                                        )}

                                                        {singleMascot.facebookLink && (
                                                            <a href={singleMascot.facebookLink} target='_blank'>
                                                                <button className='btn btn-social-i-f btn-facebook'>
                                                                    <FaFacebookF/>
                                                                </button>
                                                            </a>
                                                        )}

                                                        {singleMascot.twitterLink && (
                                                            <a href={singleMascot.twitterLink} target='_blank'>
                                                                <button className='btn btn-social-i-t btn-twitter'>
                                                                    <FaTwitter/>
                                                                </button>
                                                            </a>
                                                        )}

                                                        {singleMascot.youtubeLink && (
                                                            <a href={singleMascot.youtubeLink}
                                                               target='_blank'>
                                                                <button className='btn btn-social-i-y btn-youtube'>
                                                                    <FaYoutube/>
                                                                </button>
                                                            </a>
                                                        )}

                                                        {singleMascot.tiktokLink && (
                                                            <a href={singleMascot.tiktokLink}
                                                               target='_blank'>
                                                                <button className='btn btn-social-i btn-tiktok'>
                                                                    <FaTiktok/>
                                                                </button>
                                                            </a>
                                                        )}

                                                        <hr />

                                                        {singleMascot.description && (
                                                            <div className='template-p-detail'>
                                                                {singleMascot.description}
                                                            </div>
                                                        )}
                                                        <hr/>

                                                        {singleMascot.slug.current && (
                                                            <a href='#contact'>
                                                                <button  className='btn btn-client-book btn-red'>Book @{singleMascot.slug.current} Promo!</button>
                                                            </a>
                                                        )}
                                                    </div>


                                                    {/*<hr/>*/}
                                                    <hr className='show-break-style'/>

                                                    <div className='template-p-detail'>
                                                        More information? Please contact
                                                        <a className='email__design-s' href='mailto:shawn@ktmanagers.com' target='_blank'>
                                                            {" "}
                                                            shawn@ktmanagers.com
                                                        </a>
                                                    </div>

                                                </div>
                                            </div>




                                            {/*sticky footer*/}
                                            <div className={scroll ? 'map-color-3 influencer-handle-mobile-scroll' : 'map-color-3 influencer-handle-mobile' }>
                                                <div className="row">
                                                    <div className="home-headings tools-p-align">
                                                        <div className="horizontal-heading influencer-name">
                                                            <h1 className="home-headings-2 influencer-name-h1"><span className='influencer-name-span'> @{singleMascot.slug.current}</span></h1>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>



                                            {/* Services Component */}
                                            {/*<Services/>*/}

                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>




        </>
    );
}

export default Mascot;