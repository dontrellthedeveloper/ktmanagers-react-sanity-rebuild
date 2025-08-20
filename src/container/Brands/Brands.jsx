import React from 'react';
import './Brands.scss';
import {images} from "../../constants";
import OwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Brands = () => {
    return (
        <section id="brands">
            <div className="content-box-md-brands">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="horizontal-heading">
                                <h2 className="brand-thin">Brand <strong className="brand-bold">Partners</strong></h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <OwlCarousel
                                items='6'
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
                                        items: 3
                                    },
                                    1000: {
                                        items: 3
                                    },
                                    1200: {
                                        items: 3
                                    },
                                }}
                            >
                                

                                
                                <div className="item client">
                                    <a href='https://www.tiktok.com/@seventhavenuebeauty?lang=en' target='_blank'>
                                    <img src={images.seventhAve2} className="img-fluid" alt="client"/>
                                    </a>
                                </div>

                                <div className="item client">
                                    <a href=' https://www.tiktok.com/@golinutrition?lang=en' target='_blank'>
                                    <img src={images.goli} className="img-fluid" alt="client"/>
                                    </a>
                                </div>

                                <div className="item client">
                                    <img src={images.honorCulture} className="img-fluid" alt="client"/>
                                </div>

                                <div className="item client">
                                    <img src={images.desireeFinery} className="img-fluid" alt="client"/>
                                </div>



                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Brands;
