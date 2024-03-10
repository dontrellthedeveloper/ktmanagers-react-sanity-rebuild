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
// import ReactMarkdown from 'react-markdown';


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


function Campaign() {
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
        client.fetch(`*[_type == "campaign" && slug.current == 'campaign']{
            _id,
            slug,
            title,
            subTitle,
            description,
            link,
            buttontxt,
            descriptionMarkdown
        
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
                <title>Campaigns</title>
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
                            <h1 className="home-headings-2 influencer-name-h1"><span className='influencer-name-span'> Campaigns</span></h1>
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


                                        
                                        {singleOffer.descriptionMarkdown && (
                                            <div className='show-button'>
                                                <div className='offer-p-detail'>
                                                <ReactMarkdown children={singleOffer.descriptionMarkdown} remarkPlugins={[remarkGfm]} />

                                                    {/* {singleOffer.descriptionMarkdown} */}
                                                </div>
                                                {singleOffer.link && (
                                  

                                                <div className='template-p-detail'>

                                                    <a  
                                                    className='btn pay-btn-navbar btn-moreInfo'
                                                    href={`mailto:${singleOffer.link}`}
                                                    target='_blank'
                                                    style={{cursor: 'pointer'}}
                                                    >

                                                    <span className='pay-quote-button-styles'>{singleOffer.buttontxt}</span>

                                                    </a>
                                                </div>
                                                )}

                                                <hr/>
                                            </div>
                                        )}

                                        
                                        <iframe style={{width: '100%'}} src="https://docs.google.com/forms/d/e/1FAIpQLSf2bJw-pmWZ1AISdieLNJ9OUU5MNAO_9aEqdBYf9dqhP5-Qig/viewform?embedded=true" width="640" height="751" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                       
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








            {/* <Services/> */}




            <Helmet>
                <script>
                    
                </script>
            </Helmet>


        </>

    );
}

export default Campaign;