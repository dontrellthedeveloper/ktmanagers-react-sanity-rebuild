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
import videoBgMp4 from "../assets/KT-Management-home-screen-video-city-compressed.mp4";
import {AiOutlineLineChart} from "react-icons/ai";
import {Helmet} from "react-helmet";





function OurBrands() {
    const [singleTeamMember, setSingleTeamMember] = useState(null);
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
            <Helmet>
                <title>Brands</title>
                <meta
                    name='description'
                    content='About our company'
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

            <section id="">
                <div className="content-box-md-interact">
                    <div className="">

                        <div className="map-color-3">
                            <div className="row">
                                <div className="home-headings tools-p-align">
                                    <div className="horizontal-heading influencer-name">
                                        <h1 className="home-headings-2 influencer-name-h1"><span className='influencer-name-span'> Brands</span></h1>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </section>





            {/*sticky footer*/}
            <div className={scroll ? 'map-color-3 influencer-handle-mobile-scroll' : 'map-color-3 influencer-handle-mobile' }>
                <div className="row">
                    <div className="home-headings tools-p-align">
                        <div className="horizontal-heading influencer-name">
                            <h1 className="home-headings-2 influencer-name-h1"><span className='influencer-name-span'> @{singleTeamMember.slug.current}</span></h1>
                        </div>
                    </div>
                </div>
            </div>










            {/*<AboutSection/>*/}

            {/*<Statement/>*/}

            <Brands/>



















            {/*<section id="about">*/}

            {/*    /!* About 01 *!/*/}
            {/*    <div className="about-01">*/}
            {/*        <div className="content-box-main">*/}
            {/*            <div className="container">*/}

            {/*                /!* About Bottom *!/*/}
            {/*                <div className="row">*/}
            {/*                    <div className="col-md-12">*/}
            {/*                        <div className="about-bottom">*/}
            {/*                            <img src={urlFor(singleTeamMember.imageUrl).width(400).height(400).url()} alt="About Us" className="img-responsive"/>*/}
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

export default OurBrands;