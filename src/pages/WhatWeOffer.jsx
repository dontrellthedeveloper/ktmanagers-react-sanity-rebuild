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

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';


// import { useState } from 'react';
import Calendar from 'react-calendar';
import Modal from 'react-modal';
import ModalComp from '../components/Modal/Modal';
import ModalComp2 from '../components/Modal/Modal2';


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


function Influencers() {
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
            subTitleB,
            subTitleBB,
            subTitle2B,
            subTitleB2,
            consultationDescriptionB,
            bookingLinkB,
            bookingLinkTitleB,
            offerDescription1,
            consultationDescription,
            multiInfluencerDescription,
            moreInfoDescriptionBox1,
            moreInfoDescriptionBox2,
            moreInfoDescriptionBox3,
            prMarketingDescription,
            moreInfo2DescriptionBox1,
            moreInfo2DescriptionBox2,
            moreInfo2DescriptionBox3,
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
                            <h1 className="home-headings-2 influencer-name-h1"><span className='influencer-name-span'> Services</span></h1>
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
                                        {singleOffer.title && (
                                        <h3 className="i-map-paragraph"><b className='show-page-name-s'>{singleOffer.title}</b></h3>
                                        )}

                                        <hr/>

                                        {singleOffer.subTitle && (
                                            <h4 className='i-map-paragraph show-page-name-s offer-subheading'>{singleOffer.subTitle}</h4>
                                        )}

                                     

                                        {singleOffer.subTitleB && (
                                            <h4 style={{marginTop: '8px'}} className='i-map-paragraph show-page-name-s offer-subheading'>{singleOffer.subTitleB}</h4>
                                        )}



                                        {singleOffer.consultationDescription && (
                                            <div className='show-button'>
                                                <div className='offer-p-detail'>
                                                    {/* {singleOffer.consultationDescription} */}
                                                    <ReactMarkdown children={singleOffer.consultationDescription} remarkPlugins={[remarkGfm]} />

                                                </div>
                                                {singleOffer.bookingLink && (
                                                <div className='template-p-detail'>
                                                <a  className='btn pay-btn-navbar btn-pay'
                                                href={singleOffer.bookingLink} type="button">

                                                <span className='pay-quote-button-styles'>{singleOffer.bookingLinkTitle}</span>

                                                </a>
                                                </div>

                                                
                                                )}

                                                <hr/>
                                            </div>
                                        )}


                                        {singleOffer.subTitleBB && (
                                            <h4 className='i-map-paragraph show-page-name-s offer-subheading'>{singleOffer.subTitleBB}</h4>
                                        )}


                                        {singleOffer.subTitle2B && (
                                            <h4 style={{marginTop: '8px'}} className='i-map-paragraph show-page-name-s offer-subheading'>{singleOffer.subTitle2B}</h4>
                                        )}



                                        {singleOffer.consultationDescriptionB && (
                                            <div className='show-button'>
                                                <div className='offer-p-detail'>
                                                    {/* {singleOffer.consultationDescription} */}
                                                    <ReactMarkdown children={singleOffer.consultationDescriptionB} remarkPlugins={[remarkGfm]} />

                                                </div>
                                                {singleOffer.bookingLinkB && (
                                                <div className='template-p-detail'>
                                                <a  className='btn pay-btn-navbar btn-pay'
                                                href={singleOffer.bookingLinkB} type="button">

                                                <span className='pay-quote-button-styles'>{singleOffer.bookingLinkTitleB}</span>

                                                </a>
                                                </div>

                                                
                                                )}

                                                <hr/>
                                            </div>
                                        )}


                                        {singleOffer.title2 && (
                                        <h3 className="i-map-paragraph"><b className='show-page-name-s'>{singleOffer.title2}</b></h3>
                                        )}

                                        {singleOffer.subTitle2 && (
                                            <h4 className='i-map-paragraph show-page-name-s offer-subheading'>{singleOffer.subTitle2}</h4>
                                        )}


                                        {singleOffer.subTitleB2 && (
                                            <h4 className='i-map-paragraph show-page-name-s offer-subheading'>{singleOffer.subTitleB2}</h4>
                                        )}
                                        {singleOffer.multiInfluencerDescription && (
                                            <div className='show-button'>
                                                <div className='offer-p-detail'>
                                              

                                                    <ReactMarkdown children={singleOffer.multiInfluencerDescription} remarkPlugins={[remarkGfm]} />
                                                </div>


                                                <ModalComp/>
                                                <div>
                                                {/* <button >Open Modal</button> */}

                                                </div>
                                                <hr/>
                                            </div>
                                        )}


                                        {singleOffer.title3 && (
                                        <h3 className="i-map-paragraph"><b className='show-page-name-s'>{singleOffer.title3}</b></h3>
                                        )}

                                        {singleOffer.subTitle3 && (
                                            <h4 className='i-map-paragraph show-page-name-s offer-subheading'>{singleOffer.subTitle3}</h4>
                                        )}

                                        {singleOffer.prMarketingDescription && (
                                            <div className='show-button'>
                                                <div className='offer-p-detail'>
                                            

                                                    <ReactMarkdown children={singleOffer.prMarketingDescription} remarkPlugins={[remarkGfm]} />
                                                </div>

                                                <ModalComp2/>

                                                <hr/>
                                            </div>
                                        )}

                                        {singleOffer.title4 && (
                                        <h3 className="i-map-paragraph"><b className='show-page-name-s'>{singleOffer.title4}</b></h3>
                                        )}

                                        {singleOffer.subTitle4 && (
                                            <h4 className='i-map-paragraph show-page-name-s offer-subheading'>{singleOffer.subTitle4}</h4>
                                        )}


                                        {singleOffer.offerDescription4 && (
                                            <div className='show-button'>
                                                <div className='offer-p-detail'>
                                                    {singleOffer.offerDescription4}
                                                </div>
                                                <hr/>
                                            </div>
                                        )}

                                        {singleOffer.title5 && (
                                        <h3 className="i-map-paragraph"><b className='show-page-name-s'>{singleOffer.title5}</b></h3>
                                        )}

                                        {singleOffer.subTitle5 && (
                                            <h4 className='i-map-paragraph show-page-name-s offer-subheading'>{singleOffer.subTitle5}</h4>
                                        )}

                                        {singleOffer.offerDescription5 && (
                                            <div className='show-button'>
                                                <div className='offer-p-detail'>
                                                    {singleOffer.offerDescription5}
                                                </div>
                                                <hr/>
                                            </div>
                                        )}

                                        {singleOffer.title6 && (
                                        <h3 className="i-map-paragraph"><b className='show-page-name-s'>{singleOffer.title6}</b></h3>
                                        )}

                                        {singleOffer.subTitle6 && (
                                            <h4 className='i-map-paragraph show-page-name-s offer-subheading'>{singleOffer.subTitle6}</h4>
                                        )}


                                        {singleOffer.offerDescription6 && (
                                            <div className='show-button'>
                                                <div className='offer-p-detail'>
                                                    {singleOffer.offerDescription6}
                                                </div>
                                                <hr/>
                                            </div>
                                        )}


                                        {singleOffer.title7 && (
                                        <h3 className="i-map-paragraph"><b className='show-page-name-s'>{singleOffer.title7}</b></h3>
                                        )}

                                        {singleOffer.subTitle7 && (
                                            <h4 className='i-map-paragraph show-page-name-s offer-subheading'>{singleOffer.subTitle7}</h4>
                                        )}

                                        {singleOffer.offerDescription7 && (
                                            <div className='show-button'>
                                                <div className='offer-p-detail'>
                                                    {singleOffer.offerDescription7}
                                                </div>
                                                <hr/>
                                            </div>
                                        )}

                                        {singleOffer.title8 && (
                                        <h3 className="i-map-paragraph"><b className='show-page-name-s'>{singleOffer.title8}</b></h3>
                                        )}

                                        {singleOffer.subTitle8 && (
                                            <h4 className='i-map-paragraph show-page-name-s offer-subheading'>{singleOffer.subTitle8}</h4>
                                        )}


                                        {singleOffer.offerDescription8 && (
                                            <div className='show-button'>
                                                <div className='offer-p-detail'>
                                                    {singleOffer.offerDescription8}
                                                </div>
                                                <hr/>
                                            </div>
                                        )}


                                        {singleOffer.title9 && (
                                        <h3 className="i-map-paragraph"><b className='show-page-name-s'>{singleOffer.title9}</b></h3>
                                        )}

                                        {singleOffer.subTitle9 && (
                                            <h4 className='i-map-paragraph show-page-name-s offer-subheading'>{singleOffer.subTitle9}</h4>
                                        )}



                                        {singleOffer.offerDescription9 && (
                                            <div className='show-button'>
                                                <div className='offer-p-detail'>
                                                    {singleOffer.offerDescription9}
                                                </div>
                                                <hr/>
                                            </div>
                                        )}


                                        {singleOffer.title10 && (
                                        <h3 className="i-map-paragraph"><b className='show-page-name-s'>{singleOffer.title10}</b></h3>
                                        )}

                                        {singleOffer.subTitle10 && (
                                            <h4 className='i-map-paragraph show-page-name-s offer-subheading'>{singleOffer.subTitle10}</h4>
                                        )}


                                        {singleOffer.offerDescription10 && (
                                            <div className='show-button'>
                                                <div className='offer-p-detail'>
                                                    {singleOffer.offerDescription10}
                                                </div>
                                                <hr/>
                                            </div>
                                        )}


                       
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

export default Influencers;