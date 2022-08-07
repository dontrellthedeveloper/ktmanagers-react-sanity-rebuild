import React, {useState, useEffect} from 'react';
import './Services.scss';
import {client, urlFor} from "../../client";
import OwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {BiCaretRight, BiRightArrow} from "react-icons/bi";













const Services = () => {
    const [services, setServices] = useState(null);



    useEffect(() => {
        client.fetch(`*[_type == "service"] | order(order asc)`
        ).then((data) => {
            setServices(data)
        })

    }, []);

    if (!services) return <div>Loading.....</div>


    return (
        <>


            <section id="">
                <div className="content-box-md-interact">
                    <div className="">

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


                                            {/*<Services/>*/}

                                            <section id="pricing">
                                                <div className="content-box-md">
                                                    <div className="container">
                                                        <div className="row">
                                                            <div className="col-md-12 text-center">
                                                                <div className="horizontal-heading">
                                                                    <h5>Learn about</h5>
                                                                    <h2>Branding & Promotion</h2>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="row">


                                                            <OwlCarousel
                                                                items='3'
                                                                // autoplay
                                                                smartSpeed='700'
                                                                loop
                                                                autoplayHoverPause='false'
                                                                nav
                                                                dots='false'
                                                                id="clients-list" className="owl-carousel owl-theme"
                                                                responsive={{
                                                                    0: {
                                                                        items: 1
                                                                    },
                                                                    480: {
                                                                        items: 1
                                                                    },
                                                                    768: {
                                                                        items: 1
                                                                    },
                                                                    1000: {
                                                                        items: 2
                                                                    },
                                                                    1200: {
                                                                        items: 3
                                                                    },
                                                                }}
                                                            >


                                                                {services.map((service, index) => (
                                                                    <div key={service.name + index}
                                                                         className="branding-promo-s">
                                                                        <div className="pricing-table black">
                                                                            <div className="price">
                                                                                <div className="row">
                                                                                    <div
                                                                                        className="col-md-12 col-sm-12 col-xs-12">
                                                                                        <div className="type">
                                                                                            <h4>{service.name}</h4>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <ul className="package">

                                                                                {service.serviceDescription1 && (
                                                                                    <li>
                                                                                        <BiCaretRight/> {service.serviceDescription1}

                                                                                    </li>

                                                                                )}

                                                                                {service.serviceDescription2 && (
                                                                                    <li>
                                                                                        <BiCaretRight/> {service.serviceDescription2}
                                                                                        >
                                                                                    </li>
                                                                                )}
                                                                                {service.serviceDescription3 && (
                                                                                    <li>
                                                                                        <BiCaretRight/> {service.serviceDescription3}

                                                                                    </li>
                                                                                )}
                                                                                {service.serviceDescription4 && (
                                                                                    <li>
                                                                                        <BiCaretRight/> {service.serviceDescription4}

                                                                                    </li>
                                                                                )}
                                                                                {service.serviceDescription5 && (
                                                                                    <li>
                                                                                        <BiCaretRight/> {service.serviceDescription5}

                                                                                    </li>
                                                                                )}
                                                                                {service.serviceDescription6 && (
                                                                                    <li>
                                                                                        <BiCaretRight/> {service.serviceDescription6}

                                                                                    </li>
                                                                                )}
                                                                                {service.serviceDescription7 && (
                                                                                    <li>
                                                                                        <BiCaretRight/> {service.serviceDescription7}

                                                                                    </li>
                                                                                )}
                                                                                {service.serviceDescription8 && (
                                                                                    <li>
                                                                                        <BiCaretRight/> {service.serviceDescription8}

                                                                                    </li>
                                                                                )}
                                                                                {service.serviceDescription9 && (
                                                                                    <li>
                                                                                        <BiCaretRight/> {service.serviceDescription9}

                                                                                    </li>
                                                                                )}
                                                                                {service.serviceDescription10 && (
                                                                                    <li>
                                                                                        <BiCaretRight/> {service.serviceDescription10}

                                                                                    </li>
                                                                                )}


                                                                            </ul>

                                                                            <div className="pricing-btn">
                                                                                <a className="btn btn-general btn-white services-button-s"
                                                                                   href="#"
                                                                                   title="Get Started" role="button">Get
                                                                                    Started</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                ))}
                                                            </OwlCarousel>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>


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
};

export default Services;













































    // const [services, setServices] = useState([]);
    //
    // useEffect(() => {
    //     const query = '*[_type == "service"] | order(order asc)';
    //
    //
    //
    //     client.fetch(query)
    //         .then((data) => {
    //             setServices(data)
    //         })
    //
    // },[])
    //
    // return (

        // <section id="">
        //     <div className="content-box-md-interact">
        //         <div className="">
        //
        //             <div className="map-color-6">
        //                 <div className="container">
        //                     <div className="row">
        //                         <div id="content">
        //                             <section id="map-section" className="inner over client-section-b">
        //
        //
        //                                 <section id="pricing">
        //                                     <div className="content-box-md">
        //                                         <div className="container">
        //                                             <div className="row">
        //                                                 <div className="col-md-12 text-center">
        //                                                     <div className="horizontal-heading">
        //                                                         <h5>Learn about</h5>
        //                                                         <h2>Branding & Promotion</h2>
        //                                                     </div>
        //                                                 </div>
        //                                             </div>
        //
        //                                             <div className="row">
        //
        //
        //
        //                                                 <OwlCarousel
        //                                                     items='3'
        //                                                     // autoplay
        //                                                     smartSpeed='700'
        //                                                     loop
        //                                                     autoplayHoverPause='false'
        //                                                     nav
        //                                                     dots='false'
        //                                                     id="clients-list" className="owl-carousel owl-theme"
        //                                                     responsive={{
        //                                                         0: {
        //                                                             items: 1
        //                                                         },
        //                                                         480: {
        //                                                             items: 1
        //                                                         },
        //                                                         768: {
        //                                                             items: 1
        //                                                         },
        //                                                         1000: {
        //                                                             items: 2
        //                                                         },
        //                                                         1200: {
        //                                                             items: 3
        //                                                         }
        //                                                     }}
        //                                                 >
        //
        //
        //                                                     {services.map((service, index) => (
        //                                                         <div key={service.name + index} className="branding-promo-s">
        //                                                             <div className="pricing-table black">
        //                                                                 <div className="price">
        //                                                                     <div className="row">
        //                                                                         <div
        //                                                                             className="col-md-12 col-sm-12 col-xs-12">
        //                                                                             <div className="type">
        //                                                                                 <h4>{service.name}</h4>
        //                                                                             </div>
        //                                                                         </div>
        //                                                                     </div>
        //                                                                 </div>
        //                                                                 <ul className="package">
        //
        //                                                                     {service.serviceDescription1 && (
        //                                                                         <li>
        //                                                                             <BiCaretRight/> {service.serviceDescription1}
        //
        //                                                                         </li>
        //
        //                                                                     )}
        //
        //                                                                     {service.serviceDescription2 && (
        //                                                                         <li>
        //                                                                             <BiCaretRight/> {service.serviceDescription2}
        //                                                                             >
        //                                                                         </li>
        //                                                                     )}
        //                                                                     {service.serviceDescription3 && (
        //                                                                         <li>
        //                                                                             <BiCaretRight/> {service.serviceDescription3}
        //
        //                                                                         </li>
        //                                                                     )}
        //                                                                     {service.serviceDescription4 && (
        //                                                                         <li>
        //                                                                             <BiCaretRight/> {service.serviceDescription4}
        //
        //                                                                         </li>
        //                                                                     )}
        //                                                                     {service.serviceDescription5 && (
        //                                                                         <li>
        //                                                                             <BiCaretRight/> {service.serviceDescription5}
        //
        //                                                                         </li>
        //                                                                     )}
        //                                                                     {service.serviceDescription6 && (
        //                                                                         <li>
        //                                                                             <BiCaretRight/> {service.serviceDescription6}
        //
        //                                                                         </li>
        //                                                                     )}
        //                                                                     {service.serviceDescription7 && (
        //                                                                         <li>
        //                                                                             <BiCaretRight/> {service.serviceDescription7}
        //
        //                                                                         </li>
        //                                                                     )}
        //                                                                     {service.serviceDescription8 && (
        //                                                                         <li>
        //                                                                             <BiCaretRight/> {service.serviceDescription8}
        //
        //                                                                         </li>
        //                                                                     )}
        //                                                                     {service.serviceDescription9 && (
        //                                                                         <li>
        //                                                                             <BiCaretRight/> {service.serviceDescription9}
        //
        //                                                                         </li>
        //                                                                     )}
        //                                                                     {service.serviceDescription10 && (
        //                                                                         <li>
        //                                                                             <BiCaretRight/> {service.serviceDescription10}
        //
        //                                                                         </li>
        //                                                                     )}
        //
        //
        //                                                                 </ul>
        //
        //                                                                 <div className="pricing-btn">
        //                                                                     <a className="btn btn-general btn-white services-button-s"
        //                                                                        href="#"
        //                                                                        title="Get Started" role="button">Get
        //                                                                         Started</a>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </div>
        //
        //                                                     ))}
        //                                                 </OwlCarousel>
        //                                             </div>
        //                                         </div>
        //                                     </div>
        //                                 </section>
        //
        //
        //
        //
        //                             </section>
        //
        //                         </div>
        //
        //                     </div>
        //
        //
        //                 </div>
        //             </div>
        //
        //         </div>
        //
        //     </div>
        //
        // </section>



        // <section id="offers">
        //     <div className="content-box-md-brands" style={{backgroundColor: '#fff'}}>
        //         <div className="container">
        //             <div className="vertical-heading">
        //                 <h5 style={{top: '72px'}}>What We Offer</h5>
        //                 <h2>Primary <strong>Services</strong><br/>We Offer!</h2>
        //             </div>
        //             <div className="container row">
        //                 <div style={{marginTop: '30px'}} className="col-md-12 text-center">
        //
        //                     {services.map((service, index) => (
        //                         <div key={service.name + index}>
        //                             <h4 className="brand-thin offer-header">{service.name}</h4>
        //
        //                             {service.serviceDescription1 && (
        //                                 <h4 className="brand-thin offer-text">{service.serviceDescription1}</h4>
        //                             )}
        //
        //                             {service.serviceDescription2 && (
        //                                 <h4 className="brand-thin offer-text">{service.serviceDescription2}</h4>
        //                             )}
        //
        //                             {service.serviceDescription3 && (
        //                                 <h4 className="brand-thin offer-text">{service.serviceDescription3}</h4>
        //                             )}
        //
        //                             {service.serviceDescription4 && (
        //                                 <h4 className="brand-thin offer-text">{service.serviceDescription4}</h4>
        //                             )}
        //
        //                             {service.serviceDescription5 && (
        //                                 <h4 className="brand-thin offer-text">{service.serviceDescription5}</h4>
        //                             )}
        //
        //                             {service.serviceDescription6 && (
        //                                 <h4 className="brand-thin offer-text">{service.serviceDescription6}</h4>
        //                             )}
        //
        //                             {service.serviceDescription7 && (
        //                                 <h4 className="brand-thin offer-text">{service.serviceDescription7}</h4>
        //                             )}
        //
        //                             {service.serviceDescription8 && (
        //                                 <h4 className="brand-thin offer-text">{service.serviceDescription8}</h4>
        //                             )}
        //
        //                             {service.serviceDescription9 && (
        //                                 <h4 className="brand-thin offer-text">{service.serviceDescription9}</h4>
        //                             )}
        //
        //                             {service.serviceDescription10 && (
        //                                 <h4 className="brand-thin offer-text">{service.serviceDescription10}</h4>
        //                             )}
        //
        //
        //                             <hr className='offer-break'/>
        //                         </div>
        //
        //                     ))}
        //
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>
//     );
// };
//
// export default Services;
