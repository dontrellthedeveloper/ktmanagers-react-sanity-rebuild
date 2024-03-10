import React from 'react';
import {useEffect, useState, useRef} from "react";
import {client, urlFor} from "../client";
import {Link, useParams} from "react-router-dom";
import videoBgMp4 from "../assets/KT-Management-home-screen-video-city-compressed.mp4";
import './scss/Influencers.scss';
import {Brands, Services, Stats} from "../container";
import './scss/offer.scss'
import {Helmet} from "react-helmet";
import {PayPalScriptProvider, PayPalButtons} from "@paypal/react-paypal-js";
import { toast } from "react-toastify";
import { IoClose } from "react-icons/io5";

import 'react-calendar/dist/Calendar.css';




// import { useState } from 'react';
import Calendar from 'react-calendar';
import Modal from 'react-modal';
import ModalComp from '../components/Modal/Modal';
import ModalComp2 from '../components/Modal/Modal2';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: 0, 
      border: 'none',
      maxWidth: '1000px',
      overflow: 'scroll',
    },
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.75)'
      },
  };


function Opportunities() {
    const [influencers, setInfluencers] = useState([]);
    const [kids, setKids] = useState([]);
    const [singleOffer, setSingleOffer] = useState(null);
    const {slug} = useParams();
    const [toggle, setToggle] = useState(false)
    const [scroll, setScroll] = useState(false);
    const [price, setPrice] = useState(0);

    const [date, setDate] = useState(new Date());

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function openModal2() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#000';
    }

    function closeModal() {
        setIsOpen(false);
    }

    function closeModal2() {
        setIsOpen(false);
    }

    const priceRef = useRef(null);

    let product = {
        price,
        description: "Dues total payment: "
    };

    const onHandlePay = () => {
        setPrice(priceRef.current.value);
    };

    const onChange = date => {
        setDate(date)
    }


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
        client.fetch(`*[_type == "offer" && slug.current == 'offer']{
            _id,
            slug,
            title,
            subTitle,
            offerDescription1,
            bookingLink,
            bookingLinkTitle,
            title2,
            subTitle2,
            offerDescription2,
            moreInfoTitle1,
            moreInfoDescription1,
            moreInfoLink1,
            moreInfoTitle2,
            moreInfoDescription2,
            moreInfoLink2,
            moreInfoTitle3,
            moreInfoDescription3,
            moreInfoLink3,
            moreInfoTitle4,
            moreInfoDescription4,
            moreInfoLink4,
            title3,
            subTitle3,
            offerDescription3,
            moreInfo2Title1,
            moreInfo2Description1,
            moreInfo2Link1,
            moreInfo2Title2,
            moreInfo2Description2,
            moreInfo2Link2,
            moreInfo2Title3,
            moreInfo2Description3,
            moreInfo2Link3,
            moreInfo2Title4,
            moreInfo2Description4,
            moreInfo2Link4,
            title4,
            subTitle4,
            offerDescription4,
            title5,
            subTitle5,
            offerDescription5,
            title6,
            subTitle6,
            offerDescription6,
            title7,
            subTitle7,
            offerDescription7,
            title8,
            subTitle8,
            offerDescription8,
            title9,
            subTitle9,
            offerDescription9,
            title10,
            subTitle10,
            offerDescription10,
        }`).then((data) => setSingleOffer(data[0]))
            .catch(console.error);
    }, []);




    useEffect(() => {
        const query = '*[_type == "influencer"] | order(order asc)';

        client.fetch(query)
            .then((data) => {
                setInfluencers(data)
            })
        return () => {
            setInfluencers([])
        };
    },[])





    useEffect(() => {
        const query = '*[_type == "kids"] | order(order asc)';



        client.fetch(query)
            .then((data) => {
                setKids(data)
            })
        return () => {
            setKids([])
        }
    },[])

    if(!kids) return (
        <div className="preloader">
            <div className="status"></div>
        </div>
    )

    if(!influencers) return (
        <div className="preloader">
            <div className="status"></div>
        </div>
    )

    if(!singleOffer) return (
        <div className="preloader">
            <div className="status"></div>
        </div>
    )


    return (

        <>
            <Helmet>
                <title>Services</title>
                <meta
                    name='description'
                    content={singleOffer.offerDescription1}
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
                            <h1 className="home-headings-2 influencer-name-h1"><span className='influencer-name-span'> Opportunities</span></h1>
                        </div>
                    </div>
                </div>
            </div>



            <div className="map-color-6">
                <div className="container">
                    <div className="row">
                        <div id="content">
                            <section id="map-section" className="inner over client-section-b">
                                <div className="row-show port-popup show-page-image-s">
                                </div>

                                <div className="desc map-color-8 container-paragraph offering-info">
                                    <div className="map-paragraph">

                                        {/* <iframe style={{width: '100%'}} src="https://docs.google.com/forms/d/e/1FAIpQLSdgxjyzza3eUr5xmRrdYz9NUvv0Eesn-1kDAo2NK-sfB68JFg/viewform?embedded=true" width="640" height="2036" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}


                                        <iframe style={{width: '100%'}} src="https://docs.google.com/forms/d/e/1FAIpQLSffYXwPwewjuNjKBlphLAaVNSMsgoOZ_WVW3wTUu4HPlV_9bQ/viewform?embedded=true" width="640" height="1865" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

                                        {/* <div className="form-styles-c" id="contact-right" style={{backgroundColor: '#F4F4F4'}}>
                                            <form action="https://formspree.io/xkngaakg" method="POST">
                                                <h4 className="form-t-c">Opportunities</h4>
                                                <hr className="line-br-color"/>








                                                <p className="form-p-c">For info about opportunities, please fill out our contact
                                                    form.
                                                </p>


                                                    <div className="row">
                                                        <div className="col-md-6 col-sm-6">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" name="name"
                                                                    placeholder="Your Name"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 col-sm-6">
                                                            <div className="form-group">
                                                                <input type="email" className="form-control" name="email"
                                                                    placeholder="Email Address"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12 col-sm-12">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" name="address"
                                                                    placeholder="Shipping Address"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 col-sm-6">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" name="instagram"
                                                                    placeholder="Instagram Link"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 col-sm-6">
                                                            <div className="form-group">
                                                                <input type="email" className="form-control" name="number"
                                                                    placeholder="Instagram Follower Count "/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 col-sm-6">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" name="name"
                                                                    placeholder="TikTok Link"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 col-sm-6">
                                                            <div className="form-group">
                                                                <input type="email" className="form-control" name="email"
                                                                    placeholder="TikTok Follower Count"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 col-sm-6">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" name="name"
                                                                    placeholder="YouTube Link"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 col-sm-6">
                                                            <div className="form-group">
                                                                <input type="email" className="form-control" name="email"
                                                                    placeholder="YouTube Follower Count"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 col-sm-6">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" name="name"
                                                                    placeholder="FaceBook Link"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 col-sm-6">
                                                            <div className="form-group">
                                                                <input type="email" className="form-control" name="email"
                                                                    placeholder="FaceBook Follower Count"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 col-sm-6">
                                                            <div className="form-group">
                                                        <p className="form-p-c">Are you 18 or Over?
                                                        </p>
                                                        </div>
                                                        </div>
                                                        <div class="form-check form-check-inline">
                                                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                                                            <label class="form-check-label" for="inlineRadio1">Yes</label>
                                                            </div>
                                                            <div class="form-check form-check-inline">
                                                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                                                            <label class="form-check-label" for="inlineRadio2">No</label>
                                                            </div>
                                                        </div>
                                                    <div className="form-group">
                                                        <textarea className="form-control" name="message"
                                                                placeholder="Message"></textarea>
                                                    </div>
                                                    <div id="submit-btn" className="form-submit-b">
                                                        <button className="btn btn-general btn-red" type="submit" name="submit"
                                                                role="button">Submit
                                                        </button>
                                                    </div>
                                            </form>
                                        </div> */}







                                        

                       
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
                                {/* Services Component */}
                            </section>
                        </div>
                    </div>
                </div>
            </div>








            <Services/>

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


                                        <div key={influencer.name + index} className="col-lg-2 col-md-3 col-sm-6 col-xs-12 div-size filter women client-custom">

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
                                                            <p>{influencer.description}</p>

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


            <div className="map-color-3">
                <div className="">
                    <div className="home-headings tools-p-align">
                        <div className="horizontal-heading influencer-name">
                            <h1 className="home-headings-2 influencer-name-h1"><span className='influencer-name-span'> KTM Kids</span></h1>
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

                                    {kids.map((kid, index) => (


                                        <div key={kid.name + index} className="col-lg-2 col-md-3 col-sm-6 col-xs-12 div-size filter women client-custom">

                                            <div className="portfolio-item portfolio-pic no-underline">



                                                <Link to={'/kid/' + kid.slug.current}

                                                >
                                                    <img src={urlFor(kid.imageUrl)} className="img-responsive"
                                                         alt="portfolio 01"/>

                                                    <div className="portfolio-item-overlay margin-top-g">
                                                        <div className="portfolio-item-details text-center">
                                                            {/*Item Header*/}
                                                            <h3>{kid.name}</h3>

                                                            {/*Item Strips*/}
                                                            <span></span>

                                                            {/*Item Description */}
                                                            <p>{kid.description}</p>

                                                        </div>
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
                                                    <h1 className="home-headings-2 influencer-name-h1"><span className='influencer-name-span'> What We Offer</span></h1>
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




            <Helmet>
                <script>
                    
                </script>
            </Helmet>


        </>

    );
}

export default Opportunities;