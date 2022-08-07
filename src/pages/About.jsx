import React, {useState, useEffect} from 'react';
import {
    FaFacebookF, FaHandPointRight,
    FaInstagram, FaRegEye, FaRegHandshake,
    FaTiktok,
    FaTwitter,
    FaYoutube
} from "react-icons/fa";
import {client, urlFor} from "../client";
import {Link, useParams} from "react-router-dom";
import {images} from "../constants";

import './scss/Influencer.scss';

import {Services, Statement, About as AboutSection, Brands} from "../container";


import OwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {BiCaretRight, BiRightArrow} from "react-icons/bi";
import videoBgMp4 from "../assets/KT-Management-home-screen-video-city.mp4";
import {AiOutlineLineChart} from "react-icons/ai";





function About() {
    const [singleTeamMember, setSingleTeamMember] = useState(null);
    const [services, setServices] = useState(null);
    const {slug} = useParams();




    useEffect(() => {
        client.fetch(`*[_type == "team" && slug.current == 'ktmanagers']{
            name,
            _id,
            slug,
            instagramLink,
            facebookLink,
            twitterLink,
            youtubeLink,
            tiktokLink,
            description,
            about1,
            about2,
            companyGoalName,
            companyGoalDescription,
            companyGoalName2,
            companyGoalDescription2,
            companyGoalName3,
            companyGoalDescription3,
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
            }
        }`).then((data) => setSingleTeamMember(data[0]))
            .catch(console.error)
    }, [slug]);






    useEffect(() => {
        client.fetch(`*[_type == "service"] | order(order asc)`

        ).then((data) => {
            setServices(data)
        })

    }, []);






    if(!singleTeamMember || !services) return (
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
                                        <h1 className="home-headings-2 influencer-name-h1"><span className='influencer-name-span'> @{singleTeamMember.slug.current}</span></h1>
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
                                                {/*<a className="portfolio-item-d-overlay"*/}
                                                {/*   href={urlFor(singleInfluencer.imageUrl).width(400).height(400).url()}*/}
                                                {/*   >*/}

                                                {singleTeamMember.imageUrl2 && (
                                                    <div className="column-show map-color-7 influencer-image"
                                                    >
                                                        <img src={urlFor(singleTeamMember.imageUrl2).width(800).height(800).url()} className="influencer-image-2"
                                                             alt=""/>

                                                    </div>
                                                )}
                                                <div className="column-show map-color-7 influencer-image"
                                                >
                                                    <img src={urlFor(singleTeamMember.imageUrl).width(800).height(800).url()} className="influencer-image-2"
                                                         alt=""/>

                                                </div>

                                                {singleTeamMember.imageUrl3 && (
                                                    <div className="column-show map-color-7 influencer-image"
                                                    >
                                                        <img src={urlFor(singleTeamMember.imageUrl3).width(800).height(800).url()} className="influencer-image-2"
                                                             alt=""/>

                                                    </div>
                                                )}
                                                {/*</a>*/}
                                            </div>








                                            <div className="desc map-color-7 container-paragraph influencer-info">
                                                <div className="map-paragraph">
                                                    <h2 className="i-map-paragraph"><b className='show-page-name-s'>{singleTeamMember.name}</b></h2>
                                                    {/*<hr className='show-break-style'/>*/}
                                                    <div className='show-button'>


                                                        {singleTeamMember.instagramLink && (
                                                            <a href={singleTeamMember.instagramLink} target='_blank'>
                                                                <button className='btn btn-social-i btn-instagram'>
                                                                    <FaInstagram/>
                                                                </button>
                                                            </a>
                                                        )}

                                                        {singleTeamMember.facebookLink && (
                                                            <a href={singleTeamMember.facebookLink} target='_blank'>
                                                                <button className='btn btn-social-i-f btn-facebook'>
                                                                    <FaFacebookF/>
                                                                </button>
                                                            </a>
                                                        )}

                                                        {singleTeamMember.twitterLink && (
                                                            <a href={singleTeamMember.twitterLink} target='_blank'>
                                                                <button className='btn btn-social-i-t btn-twitter'>
                                                                    <FaTwitter/>
                                                                </button>
                                                            </a>
                                                        )}

                                                        {singleTeamMember.youtubeLink && (
                                                            <a href={singleTeamMember.youtubeLink}
                                                               target='_blank'>
                                                                <button className='btn btn-social-i-y btn-youtube'>
                                                                    <FaYoutube/>
                                                                </button>
                                                            </a>
                                                        )}

                                                        {singleTeamMember.tiktokLink && (
                                                            <a href={singleTeamMember.tiktokLink}
                                                               target='_blank'>
                                                                <button className='btn btn-social-i btn-tiktok'>
                                                                    <FaTiktok/>
                                                                </button>
                                                            </a>
                                                        )}

                                                        <hr />

                                                        <div className='template-p-detail'>
                                                            {singleTeamMember.description}
                                                        </div>

                                                        <hr/>

                                                        {/*<ButtonMailto label="Write me an E-Mail" mailto="mailto:shawn@ktmanagers.com"/>*/}

                                                        {/*<Mailto email="shawn@ktmanagers.com" >*/}
                                                        {/*    Mail me!*/}
                                                        {/*</Mailto>*/}
                                                    </div>










                                                    {/*<hr/>*/}
                                                    <hr className='show-break-style'/>
                                                    <div className='template-p-detail'>

                                                         <a
                                                        className='email__design-s'
                                                        href='mailto:shawn@ktmanagers.com'
                                                        target='_blank'>shawn@ktmanagers.com</a>
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



            <section id="about">

                {/* About 01 */}
                <div className="about-01">
                    <div className="content-box-main">
                        <div className="container">
                            <div className="row">

                                {/* About Left Side */}

                                <div className="col-md-4 col-sm-4">
                                    <div className="vertical-heading">
                                        <h5>Who We Are</h5>
                                        <h2>A <strong>Story</strong><br/>About Us</h2>
                                    </div>

                                </div>
                                {/* About Right Side */}

                                <div className="col-md-8 col-sm-8">
                                    <div className="about-right">
                                        <p className="about-text">{singleTeamMember.about1}</p>
                                        <p className="about-text">{singleTeamMember.about2}</p>
                                    </div>
                                </div>
                            </div>

                            {/* About Bottom */}
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="about-bottom">
                                        <img src={images.aboutLeft} alt="About Us" className="img-responsive"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* About 02 */}
                <div className="about-02">
                    <div className="content-box-main-2">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4 col-sm-4">
                                    <div className="about-item text-center about-h">
                                        <AiOutlineLineChart className="react-icon-about"></AiOutlineLineChart>
                                        <h3>{singleTeamMember.companyGoalName}</h3>
                                        <hr/>
                                        <p>{singleTeamMember.companyGoalDescription}</p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <div className="about-item text-center about-h">
                                        <FaRegEye className="react-icon-about"></FaRegEye>
                                        <h3>{singleTeamMember.companyGoalName2}</h3>
                                        <hr/>
                                        <p>{singleTeamMember.companyGoalDescription2}</p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <div className="about-item text-center about-h">
                                        <FaRegHandshake className="react-icon-about"></FaRegHandshake>
                                        <h3>{singleTeamMember.companyGoalName3}</h3>
                                        <hr/>
                                        <p>{singleTeamMember.companyGoalDescription3}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/*<AboutSection/>*/}

            {/*<Statement/>*/}

            {/*<Brands/>*/}



















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

export default About;