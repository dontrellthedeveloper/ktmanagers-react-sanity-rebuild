import React, {useState, useEffect, useLayoutEffect} from 'react';
import {
    FaFacebookF, FaHandPointRight, FaImdb,
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


import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import OwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {BiCaretRight, BiRightArrow} from "react-icons/bi";
import videoBgMp4 from "../assets/KT-Management-home-screen-video-city-compressed.mp4";
import {Helmet} from "react-helmet";





function Influencer() {
    const [singleInfluencer, setSingleInfluencer] = useState(null);
    const [services, setServices] = useState(null);
    // const [isVisible, setIsVisible] = useState(false);


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
            imdbLink,
            meetGreet,
            meetGreetEmoji,
            description,
            bio,
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
        }`).then((data) => setSingleInfluencer(data[0]))
            .catch(console.error)
    }, [slug]);




    useEffect(() => {
        client.fetch(`*[_type == "service"] | order(order asc)`

        ).then((data) => {
            setServices(data)
        })

    }, []);




    if(!singleInfluencer || !services ) return (
        <div className="preloader">
            <div className="status"></div>
        </div>
    )




    return (
        <>
            <Helmet>
                <title>{singleInfluencer.name}</title>
                <meta
                    name='description'
                    content={singleInfluencer.description}
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    // href="%PUBLIC_URL%/logo152.png"
                    href={urlFor(singleInfluencer.imageUrl).width(800).height(800).url()}
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
                                        {singleInfluencer.meetGreet && (
                                            <>
                                                <a href={singleInfluencer.meetGreet} target='_blank' style={{textDecoration: 'none'}}>
                                                    <h4 className='meet-n-great__style-i__heading'>Meet & Greet</h4>
                                                </a>
                                                {/*<hr/>*/}
                                            </>
                                        )}

                                        {singleInfluencer.meetGreetEmoji && (
                                            <span className='meet-n-great__style-em'>{singleInfluencer.meetGreetEmoji}</span>
                                        )}
                                        <h1 className="home-headings-2 influencer-name-h1"><span className='influencer-name-span'> @{singleInfluencer.slug.current}</span>

                                        </h1>
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


                                                    {singleInfluencer.imageUrl && (
                                                        <div className='influencer-image__show-on-mobile column-show map-color-7 influencer-image'>
                                                            <div className="portfolio-item">
                                                                <img src={urlFor(singleInfluencer.imageUrl).width(800).height(800).url()} className="influencer-image-2" alt=""/>

                                                                <div className="portfolio-item-overlay margin-top-g">
                                                                    <div className="portfolio-item-details text-center">
                                                                        {/*Item Header*/}
                                                                        {singleInfluencer.imageTitle && (
                                                                            <>
                                                                                <h3>{singleInfluencer.imageTitle}</h3>
                                                                                {/*Item Strips*/}
                                                                                <span></span>
                                                                            </>

                                                                        )}

                                                                        {/*Item Description */}
                                                                        {singleInfluencer.imageDescription && (
                                                                            <p className='influencer-description'>{singleInfluencer.imageDescription}</p>
                                                                        )}

                                                                        <div className='show-button'>

                                                                            {singleInfluencer.instagramLink && (
                                                                                <a href={singleInfluencer.instagramLink} target='_blank'>
                                                                                    <button className='btn btn-social-influencer-img btn-social-img btn-social-instagram'>
                                                                                        <FaInstagram/>
                                                                                    </button>
                                                                                </a>
                                                                            )}

                                                                            {singleInfluencer.facebookLink && (
                                                                                <a href={singleInfluencer.facebookLink} target='_blank'>
                                                                                    <button className='btn btn-social-influencer-img btn-social-img
                                                                                        btn-social-facebook'>
                                                                                        <FaFacebookF/>
                                                                                    </button>
                                                                                </a>
                                                                            )}

                                                                            {singleInfluencer.twitterLink && (
                                                                                <a href={singleInfluencer.twitterLink} target='_blank'>
                                                                                    <button className='btn btn-social-influencer-img btn-social-img
                                                                                        btn-social-twitter'>
                                                                                        <FaTwitter/>
                                                                                    </button>
                                                                                </a>
                                                                            )}

                                                                            {singleInfluencer.youtubeLink && (
                                                                                <a href={singleInfluencer.youtubeLink}
                                                                                   target='_blank'>
                                                                                    <button className='btn btn-social-influencer-img btn-social-img
                                                                                        btn-social-youtube'>
                                                                                        <FaYoutube/>
                                                                                    </button>
                                                                                </a>
                                                                            )}

                                                                            {singleInfluencer.tiktokLink && (
                                                                                <a href={singleInfluencer.tiktokLink}
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


                                                    {singleInfluencer.imageUrl2 && (
                                                        <div className="mobile__hide-image column-show map-color-7 influencer-image">
                                                            <div className="portfolio-item">
                                                                <img src={urlFor(singleInfluencer.imageUrl2).width(800).height(800).url()} className="influencer-image-2" alt=""/>

                                                                <div className="portfolio-item-overlay margin-top-g">
                                                                    <div className="portfolio-item-details text-center">
                                                                        {/*Item Header*/}
                                                                        {singleInfluencer.imageTitle2 && (
                                                                            <>
                                                                                <h3>{singleInfluencer.imageTitle2}</h3>
                                                                                {/*Item Strips*/}
                                                                                <span></span>
                                                                            </>

                                                                        )}

                                                                        {/*Item Description */}
                                                                        {singleInfluencer.imageDescription2 && (
                                                                            <p className='influencer-description'>{singleInfluencer.imageDescription2}</p>
                                                                        )}

                                                                        <div className='show-button'>

                                                                            {singleInfluencer.instagramLink && (
                                                                                <a href={singleInfluencer.instagramLink} target='_blank'>
                                                                                    <button className='btn btn-social-influencer-img btn-social-img btn-social-instagram'>
                                                                                        <FaInstagram/>
                                                                                    </button>
                                                                                </a>
                                                                            )}

                                                                            {singleInfluencer.facebookLink && (
                                                                                <a href={singleInfluencer.facebookLink} target='_blank'>
                                                                                    <button className='btn btn-social-influencer-img btn-social-img
                                                                                    btn-social-facebook'>
                                                                                        <FaFacebookF/>
                                                                                    </button>
                                                                                </a>
                                                                            )}

                                                                            {singleInfluencer.twitterLink && (
                                                                                <a href={singleInfluencer.twitterLink} target='_blank'>
                                                                                    <button className='btn btn-social-influencer-img btn-social-img
                                                                                    btn-social-twitter'>
                                                                                        <FaTwitter/>
                                                                                    </button>
                                                                                </a>
                                                                            )}

                                                                            {singleInfluencer.youtubeLink && (
                                                                                <a href={singleInfluencer.youtubeLink}
                                                                                   target='_blank'>
                                                                                    <button className='btn btn-social-influencer-img btn-social-img
                                                                                    btn-social-youtube'>
                                                                                        <FaYoutube/>
                                                                                    </button>
                                                                                </a>
                                                                            )}

                                                                            {singleInfluencer.tiktokLink && (
                                                                                <a href={singleInfluencer.tiktokLink}
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


                                                    {singleInfluencer.imageUrl && (
                                                        <div className='influencer-image__hide-on-mobile column-show map-color-7 influencer-image'>
                                                            <div className="portfolio-item">
                                                                <img src={urlFor(singleInfluencer.imageUrl).width(800).height(800).url()} className="influencer-image-2" alt=""/>

                                                                <div className="portfolio-item-overlay margin-top-g">
                                                                    <div className="portfolio-item-details text-center">
                                                                        {/*Item Header*/}
                                                                        {singleInfluencer.imageTitle && (
                                                                            <>
                                                                              <h3>{singleInfluencer.imageTitle}</h3>
                                                                                {/*Item Strips*/}
                                                                                <span></span>
                                                                            </>

                                                                        )}

                                                                        {/*Item Description */}
                                                                        {singleInfluencer.imageDescription && (
                                                                        <p className='influencer-description'>{singleInfluencer.imageDescription}</p>
                                                                        )}

                                                                        <div className='show-button'>

                                                                            {singleInfluencer.instagramLink && (
                                                                                <a href={singleInfluencer.instagramLink} target='_blank'>
                                                                                    <button className='btn btn-social-influencer-img btn-social-img btn-social-instagram'>
                                                                                        <FaInstagram/>
                                                                                    </button>
                                                                                </a>
                                                                            )}

                                                                            {singleInfluencer.facebookLink && (
                                                                                <a href={singleInfluencer.facebookLink} target='_blank'>
                                                                                    <button className='btn btn-social-influencer-img btn-social-img
                                                                                    btn-social-facebook'>
                                                                                        <FaFacebookF/>
                                                                                    </button>
                                                                                </a>
                                                                            )}

                                                                            {singleInfluencer.twitterLink && (
                                                                                <a href={singleInfluencer.twitterLink} target='_blank'>
                                                                                    <button className='btn btn-social-influencer-img btn-social-img
                                                                                    btn-social-twitter'>
                                                                                        <FaTwitter/>
                                                                                    </button>
                                                                                </a>
                                                                            )}

                                                                            {singleInfluencer.youtubeLink && (
                                                                                <a href={singleInfluencer.youtubeLink}
                                                                                   target='_blank'>
                                                                                    <button className='btn btn-social-influencer-img btn-social-img
                                                                                    btn-social-youtube'>
                                                                                        <FaYoutube/>
                                                                                    </button>
                                                                                </a>
                                                                            )}

                                                                            {singleInfluencer.tiktokLink && (
                                                                                <a href={singleInfluencer.tiktokLink}
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


                                                    {singleInfluencer.imageUrl3 && (
                                                    <div className="mobile__hide-image column-show map-color-7 influencer-image">
                                                        <div className="portfolio-item">
                                                            <img src={urlFor(singleInfluencer.imageUrl3).width(800).height(800).url()} className="influencer-image-2" alt=""/>

                                                            <div className="portfolio-item-overlay margin-top-g">
                                                                <div className="portfolio-item-details text-center">
                                                                    {/*Item Header*/}
                                                                    {singleInfluencer.imageTitle3 && (
                                                                        <>
                                                                            <h3>{singleInfluencer.imageTitle3}</h3>
                                                                            {/*Item Strips*/}
                                                                            <span></span>
                                                                        </>

                                                                    )}

                                                                    {/*Item Description */}
                                                                    {singleInfluencer.imageDescription3 && (
                                                                        <p className='influencer-description'>{singleInfluencer.imageDescription3}</p>
                                                                    )}

                                                                    <div className='show-button'>

                                                                        {singleInfluencer.instagramLink && (
                                                                            <a href={singleInfluencer.instagramLink} target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img btn-social-instagram'>
                                                                                    <FaInstagram/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                        {singleInfluencer.facebookLink && (
                                                                            <a href={singleInfluencer.facebookLink} target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img
                                                                                    btn-social-facebook'>
                                                                                    <FaFacebookF/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                        {singleInfluencer.twitterLink && (
                                                                            <a href={singleInfluencer.twitterLink} target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img
                                                                                    btn-social-twitter'>
                                                                                    <FaTwitter/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                        {singleInfluencer.youtubeLink && (
                                                                            <a href={singleInfluencer.youtubeLink}
                                                                               target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img
                                                                                    btn-social-youtube'>
                                                                                    <FaYoutube/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                        {singleInfluencer.tiktokLink && (
                                                                            <a href={singleInfluencer.tiktokLink}
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

                                                </div>


                                            <div className="row-show port-popup show-page-image-s">
                                                {singleInfluencer.imageUrl4 && (
                                                    <div className="column-show map-color-7 influencer-image">
                                                        <div className="portfolio-item">
                                                            <img src={urlFor(singleInfluencer.imageUrl4).width(800).height(800).url()} className="influencer-image-2" alt=""/>

                                                            <div className="portfolio-item-overlay margin-top-g">
                                                                <div className="portfolio-item-details text-center">
                                                                    {/*Item Header*/}
                                                                    {singleInfluencer.imageTitle4 && (
                                                                        <>
                                                                            <h3>{singleInfluencer.imageTitle4}</h3>
                                                                            {/*Item Strips*/}
                                                                            <span></span>
                                                                        </>

                                                                    )}

                                                                    {/*Item Description */}
                                                                    {singleInfluencer.imageDescription4 && (
                                                                        <p className='influencer-description'>{singleInfluencer.imageDescription4}</p>
                                                                    )}

                                                                    <div className='show-button'>

                                                                        {singleInfluencer.instagramLink && (
                                                                            <a href={singleInfluencer.instagramLink} target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img btn-social-instagram'>
                                                                                    <FaInstagram/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                        {singleInfluencer.facebookLink && (
                                                                            <a href={singleInfluencer.facebookLink} target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img
                                                                                    btn-social-facebook'>
                                                                                    <FaFacebookF/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                        {singleInfluencer.twitterLink && (
                                                                            <a href={singleInfluencer.twitterLink} target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img
                                                                                    btn-social-twitter'>
                                                                                    <FaTwitter/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                        {singleInfluencer.youtubeLink && (
                                                                            <a href={singleInfluencer.youtubeLink}
                                                                               target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img
                                                                                    btn-social-youtube'>
                                                                                    <FaYoutube/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                        {singleInfluencer.tiktokLink && (
                                                                            <a href={singleInfluencer.tiktokLink}
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
                                                {singleInfluencer.imageUrl5 && (
                                                    <div className="mobile__hide-image column-show map-color-7 influencer-image">
                                                        <div className="portfolio-item">
                                                            <img src={urlFor(singleInfluencer.imageUrl5).width(800).height(800).url()} className="influencer-image-2" alt=""/>

                                                            <div className="portfolio-item-overlay margin-top-g">
                                                                <div className="portfolio-item-details text-center">
                                                                    {/*Item Header*/}
                                                                    {singleInfluencer.imageTitle5 && (
                                                                        <>
                                                                            <h3>{singleInfluencer.imageTitle5}</h3>
                                                                            {/*Item Strips*/}
                                                                            <span></span>
                                                                        </>

                                                                    )}

                                                                    {/*Item Description */}
                                                                    {singleInfluencer.imageDescription5 && (
                                                                        <p className='influencer-description'>{singleInfluencer.imageDescription5}</p>
                                                                    )}

                                                                    <div className='show-button'>

                                                                        {singleInfluencer.instagramLink && (
                                                                            <a href={singleInfluencer.instagramLink} target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img btn-social-instagram'>
                                                                                    <FaInstagram/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                        {singleInfluencer.facebookLink && (
                                                                            <a href={singleInfluencer.facebookLink} target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img
                                                                                    btn-social-facebook'>
                                                                                    <FaFacebookF/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                        {singleInfluencer.twitterLink && (
                                                                            <a href={singleInfluencer.twitterLink} target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img
                                                                                    btn-social-twitter'>
                                                                                    <FaTwitter/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                        {singleInfluencer.youtubeLink && (
                                                                            <a href={singleInfluencer.youtubeLink}
                                                                               target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img
                                                                                    btn-social-youtube'>
                                                                                    <FaYoutube/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                        {singleInfluencer.tiktokLink && (
                                                                            <a href={singleInfluencer.tiktokLink}
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

                                                {singleInfluencer.imageUrl6 && (
                                                    <div className="mobile__hide-image column-show map-color-7 influencer-image">
                                                        <div className="portfolio-item">
                                                            <img src={urlFor(singleInfluencer.imageUrl6).width(800).height(800).url()} className="influencer-image-2" alt=""/>

                                                            <div className="portfolio-item-overlay margin-top-g">
                                                                <div className="portfolio-item-details text-center">
                                                                    {/*Item Header*/}
                                                                    {singleInfluencer.imageTitle6 && (
                                                                        <>
                                                                            <h3>{singleInfluencer.imageTitle6}</h3>
                                                                            {/*Item Strips*/}
                                                                            <span></span>
                                                                        </>
                                                                    )}

                                                                    {/*Item Description */}
                                                                    {singleInfluencer.imageDescription6 && (
                                                                        <p className='influencer-description'>{singleInfluencer.imageDescription6}</p>
                                                                    )}

                                                                    <div className='show-button'>

                                                                        {singleInfluencer.instagramLink && (
                                                                            <a href={singleInfluencer.instagramLink} target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img btn-social-instagram'>
                                                                                    <FaInstagram/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                        {singleInfluencer.facebookLink && (
                                                                            <a href={singleInfluencer.facebookLink} target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img
                                                                                    btn-social-facebook'>
                                                                                    <FaFacebookF/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                        {singleInfluencer.twitterLink && (
                                                                            <a href={singleInfluencer.twitterLink} target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img
                                                                                    btn-social-twitter'>
                                                                                    <FaTwitter/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                        {singleInfluencer.youtubeLink && (
                                                                            <a href={singleInfluencer.youtubeLink}
                                                                               target='_blank'>
                                                                                <button className='btn btn-social-influencer-img btn-social-img
                                                                                    btn-social-youtube'>
                                                                                    <FaYoutube/>
                                                                                </button>
                                                                            </a>
                                                                        )}

                                                                        {singleInfluencer.tiktokLink && (
                                                                            <a href={singleInfluencer.tiktokLink}
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

                                                        {singleInfluencer.name && (
                                                            <div style={{textAlign: 'center'}}>
                                                                {singleInfluencer.meetGreet && (
                                                                    <>
                                                                        <a href={singleInfluencer.meetGreet} target='_blank' style={{textDecoration: 'none'}}>
                                                                            <h4 className='meet-n-great__style-i'>Meet & Greet</h4>
                                                                        </a>
                                                                        {/*<hr/>*/}
                                                                    </>
                                                                )}

                                                                {singleInfluencer.meetGreetEmoji && (
                                                                    <span className='meet-n-great__style-em'>{singleInfluencer.meetGreetEmoji}</span>
                                                                )}

                                                                <h2 className="i-map-paragraph" style={{display:'inline-block'}}>
                                                                    <b className='show-page-name-s'>{singleInfluencer.name}</b></h2>
                                                            </div>
                                                        )}

                                                        <div className='show-button' >

                                                            <div style={{display: 'flex', justifyContent: 'center'}}>
                                                                {singleInfluencer.imdbLink && (

                                                                    <a href={singleInfluencer.imdbLink} target='_blank'>
                                                                    <button className='btn btn-social-imdb btn-imdb' style={{display: 'flex', justifyContent: 'center'}}>
                                                                        <FaImdb/>
                                                                    </button>
                                                                </a>
                                                                )}

                                                                {singleInfluencer.instagramLink && (
                                                                    <a href={singleInfluencer.instagramLink} target='_blank'>
                                                                        <button className='btn btn-social-i btn-instagram' style={{display: 'flex', justifyContent: 'center'}}>
                                                                            <FaInstagram/>
                                                                        </button>
                                                                    </a>
                                                                )}

                                                                {singleInfluencer.facebookLink && (
                                                                    <a href={singleInfluencer.facebookLink} target='_blank'>
                                                                        <button className='btn btn-social-i-f btn-facebook' style={{display: 'flex', justifyContent: 'center'}}>
                                                                            <FaFacebookF/>
                                                                        </button>
                                                                    </a>
                                                                )}

                                                                {singleInfluencer.twitterLink && (
                                                                    <a href={singleInfluencer.twitterLink} target='_blank'>
                                                                        <button className='btn btn-social-i-t btn-twitter' style={{display: 'flex', justifyContent: 'center'}}>
                                                                            <FaTwitter/>
                                                                        </button>
                                                                    </a>
                                                                )}

                                                                {singleInfluencer.youtubeLink && (
                                                                    <a href={singleInfluencer.youtubeLink}
                                                                       target='_blank'>
                                                                        <button className='btn btn-social-i-y btn-youtube' style={{display: 'flex', justifyContent: 'center'}}>
                                                                            <FaYoutube/>
                                                                        </button>
                                                                    </a>
                                                                )}

                                                                {singleInfluencer.tiktokLink && (
                                                                    <a href={singleInfluencer.tiktokLink}
                                                                       target='_blank'>
                                                                        <button className='btn btn-social-i btn-tiktok' style={{display: 'flex', justifyContent: 'center'}}>
                                                                            <FaTiktok/>
                                                                        </button>
                                                                    </a>
                                                                )}
                                                            </div>



                                                            <hr />

                                                            {singleInfluencer.description && (

                                                                    <div className='template-p-detail'>
                                                                        {singleInfluencer.description}
                                                                    </div>

                                                            )}

                                                            {singleInfluencer.bio && (
                                                            <div className='template-p-detail template-p-detail-2'>
                                                                <ReactMarkdown children={singleInfluencer.bio} remarkPlugins={[remarkGfm]} />
                                                            </div>
                                                            )}
                                                            <hr/>

                                                            {/*{singleInfluencer.meetGreet && (*/}
                                                            {/*    <>*/}
                                                            {/*        <a href={singleInfluencer.meetGreet} target='_blank' style={{textDecoration: 'none'}}>*/}
                                                            {/*            <h4 className='meet-n-great__style-i' style={{marginTop: '.5rem'}}>Meet & Greet</h4>*/}
                                                            {/*        </a>*/}
                                                            {/*        <hr/>*/}
                                                            {/*    </>*/}
                                                            {/*)}*/}




                                                            {singleInfluencer.slug.current && (
                                                            <a href='#contact'>

                                                                <button  className='btn btn-client-book btn-red'>Book @{singleInfluencer.slug.current} Promo!</button>
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



                                            {/* Services Component */}
                                            <Services/>

                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/*sticky footer*/}
                            <div className={scroll ? 'map-color-3 influencer-handle-mobile-scroll' : 'map-color-3 influencer-handle-mobile' }>
                                <div className="row">
                                    <div className="home-headings tools-p-align">
                                        <div className="horizontal-heading influencer-name">
                                            {singleInfluencer.meetGreet && (
                                                <>
                                                    <a href={singleInfluencer.meetGreet} target='_blank' style={{textDecoration: 'none'}}>
                                                        <h4 className='meet-n-great__style-i__heading'>Meet & Greet</h4>
                                                    </a>
                                                    {/*<hr/>*/}
                                                </>
                                            )}

                                            {singleInfluencer.meetGreetEmoji && (
                                                <span className='meet-n-great__style-em'>{singleInfluencer.meetGreetEmoji}</span>
                                            )}
                                            <h1 className="home-headings-2 influencer-name-h1"><span className='influencer-name-span'> @{singleInfluencer.slug.current}</span></h1>
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

export default Influencer;
