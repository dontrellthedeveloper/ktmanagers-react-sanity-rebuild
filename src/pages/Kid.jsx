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





function Kid() {
    const [singleKid, setSingleKid] = useState(null);
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
        }`).then((data) => setSingleKid(data[0]))
            .catch(console.error)
    }, [slug]);






    useEffect(() => {
        client.fetch(`*[_type == "service"] | order(order asc)`

        ).then((data) => {
            setServices(data)
        })

    }, []);






    if(!singleKid || !services) return (
        <div className="preloader">
            <div className="status"></div>
        </div>
    )
    // if(!services) return <div>Loading.....</div>


    return (
        <>
            <Helmet>
                <title>{singleKid.name}</title>
                <meta
                    name='description'
                    content={singleKid.description}
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    // href="%PUBLIC_URL%/logo152.png"
                    href={urlFor(singleKid.imageUrl).width(800).height(800).url()}
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
                                        <h1 className="home-headings-2 influencer-name-h1"><span className='influencer-name-span'> @{singleKid.slug.current}</span></h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="map-color-6">
                            <div className="container">
                                <div className="row">
                                    <div id="content" className='influencer-single-page__mobile-img'>
                                        <section id="map-section" className="inner over client-section-b">
                                            {/*<ul id="examples-2">*/}
                                            {/*    <li><Link to='/'*/}
                                            {/*           className="background-map-2">&#8592; Back to All Influencers</Link>*/}
                                            {/*    </li>*/}
                                            {/*</ul>*/}

                                            {/*<hr/>*/}


                                            <div className="row-show port-popup show-page-image-s">

                                                {singleKid.imageUrl && (
                                                    <div className="influencer-image__show-on-mobile column-show map-color-7 influencer-image">
                                                        <div className="portfolio-item">
                                                            <img src={urlFor(singleKid.imageUrl).width(800).height(800).url()} className="influencer-image-2" alt=""/>

                                                            <div className="portfolio-item-overlay margin-top-g">
                                                                <div className="portfolio-item-details text-center">
                                                                    {/*Item Header*/}
                                                                    {singleKid.imageTitle && (
                                                                        <>
                                                                            <h3>{singleKid.imageTitle}</h3>
                                                                            {/*Item Strips*/}
                                                                            <span></span>
                                                                        </>

                                                                    )}

                                                                    {/*Item Description */}
                                                                    {singleKid.imageDescription && (
                                                                        <p className='influencer-description'>{singleKid.imageDescription}</p>
                                                                    )}

                                                                    <div className='show-button'>

                                                                        {singleKid.instagramLink && (
                                                                            <a href={singleKid.instagramLink} target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img btn-social-instagram'>
                                                                                    <FaInstagram/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                        {singleKid.facebookLink && (
                                                                            <a href={singleKid.facebookLink} target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img
                                                                                        btn-social-facebook'>
                                                                                    <FaFacebookF/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                        {singleKid.twitterLink && (
                                                                            <a href={singleKid.twitterLink} target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img
                                                                                        btn-social-twitter'>
                                                                                    <FaTwitter/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                        {singleKid.youtubeLink && (
                                                                            <a href={singleKid.youtubeLink}
                                                                               target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img
                                                                                        btn-social-youtube'>
                                                                                    <FaYoutube/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                        {singleKid.tiktokLink && (
                                                                            <a href={singleKid.tiktokLink}
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


                                                {singleKid.imageUrl2 && (
                                                    <div className="mobile__hide-image column-show map-color-7 influencer-image">
                                                        <div className="portfolio-item">
                                                            <img src={urlFor(singleKid.imageUrl2).width(800).height(800).url()} className="influencer-image-2" alt=""/>

                                                            <div className="portfolio-item-overlay margin-top-g">
                                                                <div className="portfolio-item-details text-center">
                                                                    {/*Item Header*/}
                                                                    {singleKid.imageTitle2 && (
                                                                        <>
                                                                            <h3>{singleKid.imageTitle2}</h3>
                                                                            {/*Item Strips*/}
                                                                            <span></span>
                                                                        </>

                                                                    )}

                                                                    {/*Item Description */}
                                                                    {singleKid.imageDescription2 && (
                                                                        <p className='influencer-description'>{singleKid.imageDescription2}</p>
                                                                    )}

                                                                    <div className='show-button'>

                                                                        {singleKid.instagramLink && (
                                                                            <a href={singleKid.instagramLink} target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img btn-social-instagram'>
                                                                                    <FaInstagram/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                        {singleKid.facebookLink && (
                                                                            <a href={singleKid.facebookLink} target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img
                                                                                    btn-social-facebook'>
                                                                                    <FaFacebookF/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                        {singleKid.twitterLink && (
                                                                            <a href={singleKid.twitterLink} target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img
                                                                                    btn-social-twitter'>
                                                                                    <FaTwitter/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                        {singleKid.youtubeLink && (
                                                                            <a href={singleKid.youtubeLink}
                                                                               target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img
                                                                                    btn-social-youtube'>
                                                                                    <FaYoutube/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                        {singleKid.tiktokLink && (
                                                                            <a href={singleKid.tiktokLink}
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

                                                {singleKid.imageUrl && (
                                                    <div className="influencer-image__hide-on-mobile column-show map-color-7 influencer-image">
                                                        <div className="portfolio-item">
                                                            <img src={urlFor(singleKid.imageUrl).width(800).height(800).url()} className="influencer-image-2" alt=""/>

                                                            <div className="portfolio-item-overlay margin-top-g">
                                                                <div className="portfolio-item-details text-center">
                                                                    {/*Item Header*/}
                                                                    {singleKid.imageTitle && (
                                                                        <>
                                                                            <h3>{singleKid.imageTitle}</h3>
                                                                            {/*Item Strips*/}
                                                                            <span></span>
                                                                        </>

                                                                    )}

                                                                    {/*Item Description */}
                                                                    {singleKid.imageDescription && (
                                                                        <p className='influencer-description'>{singleKid.imageDescription}</p>
                                                                    )}

                                                                    <div className='show-button'>

                                                                        {singleKid.instagramLink && (
                                                                            <a href={singleKid.instagramLink} target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img btn-social-instagram'>
                                                                                    <FaInstagram/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                        {singleKid.facebookLink && (
                                                                            <a href={singleKid.facebookLink} target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img
                                                                                        btn-social-facebook'>
                                                                                    <FaFacebookF/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                        {singleKid.twitterLink && (
                                                                            <a href={singleKid.twitterLink} target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img
                                                                                        btn-social-twitter'>
                                                                                    <FaTwitter/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                        {singleKid.youtubeLink && (
                                                                            <a href={singleKid.youtubeLink}
                                                                               target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img
                                                                                        btn-social-youtube'>
                                                                                    <FaYoutube/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                        {singleKid.tiktokLink && (
                                                                            <a href={singleKid.tiktokLink}
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

                                                {singleKid.imageUrl3 && (
                                                    <div className="column-show map-color-7 influencer-image"
                                                    >
                                                        <div className="portfolio-item">
                                                            <img src={urlFor(singleKid.imageUrl3).width(800).height(800).url()} className="influencer-image-2" alt=""/>

                                                            <div className="portfolio-item-overlay margin-top-g">
                                                                <div className="portfolio-item-details text-center">
                                                                    {/*Item Header*/}
                                                                    {singleKid.imageTitle3 && (
                                                                        <>
                                                                            <h3>{singleKid.imageTitle3}</h3>
                                                                            {/*Item Strips*/}
                                                                            <span></span>
                                                                        </>

                                                                    )}

                                                                    {/*Item Description */}
                                                                    {singleKid.imageDescription3 && (
                                                                        <p className='influencer-description'>{singleKid.imageDescription3}</p>
                                                                    )}

                                                                    <div className='show-button'>

                                                                        {singleKid.instagramLink && (
                                                                            <a href={singleKid.instagramLink} target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img btn-social-instagram'>
                                                                                    <FaInstagram/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                        {singleKid.facebookLink && (
                                                                            <a href={singleKid.facebookLink} target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img
                                                                                    btn-social-facebook'>
                                                                                    <FaFacebookF/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                        {singleKid.twitterLink && (
                                                                            <a href={singleKid.twitterLink} target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img
                                                                                    btn-social-twitter'>
                                                                                    <FaTwitter/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                        {singleKid.youtubeLink && (
                                                                            <a href={singleKid.youtubeLink}
                                                                               target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img
                                                                                    btn-social-youtube'>
                                                                                    <FaYoutube/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                        {singleKid.tiktokLink && (
                                                                            <a href={singleKid.tiktokLink}
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
                                                {singleKid.imageUrl4 && (
                                                    <div className="column-show map-color-7 influencer-image">
                                                        <div className="portfolio-item">
                                                            <img src={urlFor(singleKid.imageUrl4).width(800).height(800).url()} className="influencer-image-2" alt=""/>

                                                            <div className="portfolio-item-overlay margin-top-g">
                                                                <div className="portfolio-item-details text-center">
                                                                    {/*Item Header*/}
                                                                    {singleKid.imageTitle4 && (
                                                                        <>
                                                                            <h3>{singleKid.imageTitle4}</h3>
                                                                            {/*Item Strips*/}
                                                                            <span></span>
                                                                        </>

                                                                    )}

                                                                    {/*Item Description */}
                                                                    {singleKid.imageDescription4 && (
                                                                        <p className='influencer-description'>{singleKid.imageDescription4}</p>
                                                                    )}

                                                                    <div className='show-button'>

                                                                        {singleKid.instagramLink && (
                                                                            <a href={singleKid.instagramLink} target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img btn-social-instagram'>
                                                                                    <FaInstagram/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                        {singleKid.facebookLink && (
                                                                            <a href={singleKid.facebookLink} target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img
                                                                                    btn-social-facebook'>
                                                                                    <FaFacebookF/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                        {singleKid.twitterLink && (
                                                                            <a href={singleKid.twitterLink} target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img
                                                                                    btn-social-twitter'>
                                                                                    <FaTwitter/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                        {singleKid.youtubeLink && (
                                                                            <a href={singleKid.youtubeLink}
                                                                               target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img
                                                                                    btn-social-youtube'>
                                                                                    <FaYoutube/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                        {singleKid.tiktokLink && (
                                                                            <a href={singleKid.tiktokLink}
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
                                                {singleKid.imageUrl5 && (
                                                    <div className="mobile__hide-image column-show map-color-7 influencer-image">
                                                        <div className="portfolio-item">
                                                            <img src={urlFor(singleKid.imageUrl5).width(800).height(800).url()} className="influencer-image-2" alt=""/>

                                                            <div className="portfolio-item-overlay margin-top-g">
                                                                <div className="portfolio-item-details text-center">
                                                                    {/*Item Header*/}
                                                                    {singleKid.imageTitle5 && (
                                                                        <>
                                                                            <h3>{singleKid.imageTitle5}</h3>
                                                                            {/*Item Strips*/}
                                                                            <span></span>
                                                                        </>

                                                                    )}

                                                                    {/*Item Description */}
                                                                    {singleKid.imageDescription5 && (
                                                                        <p className='influencer-description'>{singleKid.imageDescription5}</p>
                                                                    )}

                                                                    <div className='show-button'>

                                                                        {singleKid.instagramLink && (
                                                                            <a href={singleKid.instagramLink} target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img btn-social-instagram'>
                                                                                    <FaInstagram/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                        {singleKid.facebookLink && (
                                                                            <a href={singleKid.facebookLink} target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img
                                                                                    btn-social-facebook'>
                                                                                    <FaFacebookF/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                        {singleKid.twitterLink && (
                                                                            <a href={singleKid.twitterLink} target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img
                                                                                    btn-social-twitter'>
                                                                                    <FaTwitter/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                        {singleKid.youtubeLink && (
                                                                            <a href={singleKid.youtubeLink}
                                                                               target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img
                                                                                    btn-social-youtube'>
                                                                                    <FaYoutube/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                        {singleKid.tiktokLink && (
                                                                            <a href={singleKid.tiktokLink}
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

                                                {singleKid.imageUrl6 && (
                                                    <div className="mobile__hide-image column-show map-color-7 influencer-image">
                                                        <div className="portfolio-item">
                                                            <img src={urlFor(singleKid.imageUrl6).width(800).height(800).url()} className="influencer-image-2" alt=""/>

                                                            <div className="portfolio-item-overlay margin-top-g">
                                                                <div className="portfolio-item-details text-center">
                                                                    {/*Item Header*/}
                                                                    {singleKid.imageTitle6 && (
                                                                        <>
                                                                            <h3>{singleKid.imageTitle6}</h3>
                                                                            {/*Item Strips*/}
                                                                            <span></span>
                                                                        </>
                                                                    )}

                                                                    {/*Item Description */}
                                                                    {singleKid.imageDescription6 && (
                                                                        <p className='influencer-description'>{singleKid.imageDescription6}</p>
                                                                    )}

                                                                    <div className='show-button'>

                                                                        {singleKid.instagramLink && (
                                                                            <a href={singleKid.instagramLink} target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img btn-social-instagram'>
                                                                                    <FaInstagram/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                        {singleKid.facebookLink && (
                                                                            <a href={singleKid.facebookLink} target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img
                                                                                    btn-social-facebook'>
                                                                                    <FaFacebookF/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                        {singleKid.twitterLink && (
                                                                            <a href={singleKid.twitterLink} target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img
                                                                                    btn-social-twitter'>
                                                                                    <FaTwitter/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                        {singleKid.youtubeLink && (
                                                                            <a href={singleKid.youtubeLink}
                                                                               target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img
                                                                                    btn-social-youtube'>
                                                                                    <FaYoutube/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                        {singleKid.tiktokLink && (
                                                                            <a href={singleKid.tiktokLink}
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
                                                    <h2 className="i-map-paragraph"><b className='show-page-name-s'>{singleKid.name}</b></h2>
                                                    {/*<hr className='show-break-style'/>*/}
                                                    <div className='show-button'>


                                                        {singleKid.instagramLink && (
                                                            <a href={singleKid.instagramLink} target='_blank'>
                                                                <button className='btn btn-social-i btn-instagram'>
                                                                    <FaInstagram/>
                                                                </button>
                                                            </a>
                                                        )}

                                                        {singleKid.facebookLink && (
                                                            <a href={singleKid.facebookLink} target='_blank'>
                                                                <button className='btn btn-social-i-f btn-facebook'>
                                                                    <FaFacebookF/>
                                                                </button>
                                                            </a>
                                                        )}

                                                        {singleKid.twitterLink && (
                                                            <a href={singleKid.twitterLink} target='_blank'>
                                                                <button className='btn btn-social-i-t btn-twitter'>
                                                                    <FaTwitter/>
                                                                </button>
                                                            </a>
                                                        )}

                                                        {singleKid.youtubeLink && (
                                                            <a href={singleKid.youtubeLink}
                                                               target='_blank'>
                                                                <button className='btn btn-social-i-y btn-youtube'>
                                                                    <FaYoutube/>
                                                                </button>
                                                            </a>
                                                        )}

                                                        {singleKid.tiktokLink && (
                                                            <a href={singleKid.tiktokLink}
                                                               target='_blank'>
                                                                <button className='btn btn-social-i btn-tiktok'>
                                                                    <FaTiktok/>
                                                                </button>
                                                            </a>
                                                        )}

                                                        <hr />

                                                        <div className='template-p-detail'>
                                                            {singleKid.description}
                                                        </div>

                                                        <hr/>
                                                        <a
                                                            // href="mailto:shawn@ktmanagers.com"
                                                            href='#contact'
                                                        >
                                                            <button className='btn btn-client-book btn-red'>Book @{singleKid.slug.current} Promo!</button>
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
                                                        target='_blank'>
                                                        {" "}
                                                        shawn@ktmanagers.com</a>
                                                    </div>


                                                </div>
                                            </div>


                                            <Services/>






                                            {/*sticky footer*/}
                                            <div className={scroll ? 'map-color-3 influencer-handle-mobile-scroll' : 'map-color-3 influencer-handle-mobile' }>
                                                <div className="row">
                                                    <div className="home-headings tools-p-align">
                                                        <div className="horizontal-heading influencer-name">
                                                            <h1 className="home-headings-2 influencer-name-h1"><span className='influencer-name-span'> @{singleKid.slug.current}</span></h1>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


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

export default Kid;