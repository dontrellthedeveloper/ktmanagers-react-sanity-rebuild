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
                                <h2 className="brand-thin">Our Happy <strong className="brand-bold">Brands</strong></h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <OwlCarousel
                                items='6'
                                autoplay
                                smartSpeed='700'
                                loop
                                autoplayHoverPause='false'
                                nav
                                dots='false'
                                id="clients-list" className="owl-carousel owl-theme">

                                <div className="item client">
                                    <img src={images.brands1} className="img-fluid" alt="client"/>
                                </div>
                                <div className="item client">
                                    <img src={images.brands2} className="img-fluid" alt="client"/>
                                </div>

                                <div className="item client">
                                    <img src={images.brands3} className="img-fluid" alt="client"/>
                                </div>

                                <div className="item client">
                                    <img src={images.brands4} className="img-fluid" alt="client"/>
                                </div>

                                <div className="item client">
                                    <img src={images.brands5} className="img-fluid" alt="client"/>
                                </div>

                                <div className="item client">
                                    <img src={images.brands6} className="img-fluid" alt="client"/>
                                </div>

                                <div className="item client">
                                    <img src={images.brands7} className="img-fluid" alt="client"/>
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
