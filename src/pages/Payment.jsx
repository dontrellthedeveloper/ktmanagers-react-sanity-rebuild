import React from 'react';
import {useEffect, useState, useRef} from "react";
import {Link, useParams} from "react-router-dom";
import videoBgMp4 from "../assets/KT-Management-home-screen-video-city-compressed.mp4";
import './scss/Influencers.scss';
import './scss/offer.scss'
import {Helmet} from "react-helmet";
import {PayPalScriptProvider, PayPalButtons} from "@paypal/react-paypal-js";
import { toast } from "react-toastify";


function Payment() {
    const [toggle, setToggle] = useState(false)
    const [scroll, setScroll] = useState(false);
    const [price, setPrice] = useState(0);

    const priceRef = useRef(null);

    let product = {
        price,
        description: "Dues total payment: "
    };

    const onHandlePay = () => {
        setPrice(priceRef.current.value);
    };



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





    return (

        <>
            <Helmet>
                <title>Payment Form</title>
                <meta
                    name='description'
                    content='payment form'
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
                            <h1 className="home-headings-2 influencer-name-h1"><span className='influencer-name-span'> Pay Your Quote</span></h1>
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
                                        <h3 className="i-map-paragraph"><b className='show-page-name-s'>Payment Form</b></h3>

                                        {/*    <h4 className='i-map-paragraph show-page-name-s offer-subheading'>Submit your Quited Amount Below</h4>*/}




                                        {/*{singleOffer.offerDescription1 && (*/}
                                        {/*    <div className='show-button'>*/}
                                        {/*        <div className='offer-p-detail'>*/}
                                        {/*            {singleOffer.offerDescription1}*/}
                                        {/*        </div>*/}

                                        {/*    </div>*/}
                                        {/*)}*/}

                                        <hr/>

                                        <div>
                                            <p className='offer-p-detail show-page-name-s offer-subheading' style={{fontWeight: '600'}}>
                                                HAVE YOU BEEN QUOTED AND READY TO PAY?
                                            </p>
                                        </div>

                                        <div>

                                            <div style={{textAlign: 'center', margin: '30px auto'}}>
                                                <input placeholder='Enter Quoted Amount...' type="text"  ref={priceRef} />
                                                <button onClick={onHandlePay} className='btn btn-general btn-red' type="button">
                                                    Confirm
                                                </button>
                                            </div>

                                            <p className='offer-p-detail show-page-name-s offer-subheading'>
                                                Quoted Amount: ${product.price}
                                            </p>
                                        </div>

                                        <div className="pricing-btn offer-button-page" style={{marginBottom: '60px', marginTop: '20px'}}>
                                            {/*<p onClick={() => setToggle(!toggle)}  className='offer-p-detail show-page-name-s offer-subheading ' style={{fontWeight: '600', color: 'green', cursor: 'pointer'}}>CLICK HERE TO PAY NOW</p>*/}

                                            <button onClick={() => setToggle(!toggle)} className='btn btn-general btn-pay' type="button">
                                                <span className='pay-quote-button-styles'>CLICK HERE TO PAY NOW</span>
                                            </button>
                                        </div>



                                        {toggle && (

                                            <div>
                                                <hr/>
                                                <div className='paypal-button-styles'>
                                                    <PayPalScriptProvider options={{"client-id": process.env.REACT_APP_PAYPAL_LIVE}}>
                                                        <PayPalButtons
                                                            createOrder={(data, actions) => {
                                                                return actions.order.create({
                                                                    purchase_units: [
                                                                        {
                                                                            amount: {
                                                                                value: priceRef.current.value
                                                                            }
                                                                        }
                                                                    ]
                                                                })
                                                            }}
                                                            onApprove={(data, actions) =>{
                                                                return actions.order.capture().then(function (details){
                                                                    // alert("Transaction completed by " + details.payer.name.given_name)
                                                                    toast.success("Transaction completed by " + details.payer.name.given_name);
                                                                })
                                                            }}
                                                        />
                                                    </PayPalScriptProvider>
                                                </div>

                                            </div>

                                        )}




                                        <div className="pricing-btn offer-button-page">
                                            <a className="btn btn-general btn-white services-button-s"
                                               href='#contact'
                                               title="Get Started" role="button">Get
                                                Started</a>
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
                                {/* Services Component */}
                            </section>
                        </div>
                    </div>
                </div>
            </div>





        </>

    );
}

export default Payment;