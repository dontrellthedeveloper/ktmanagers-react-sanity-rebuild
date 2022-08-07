import React from 'react';
import './Footer.scss';
import {FaFacebookF, FaInstagram} from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <section id="contact">
                <div className="content-box-contact">
                    <div className="container">
                        <div className="row">

                            <div className="horizontal-heading contact-main-form-h">
                                <h5>connect &</h5>
                                <h2>Get In <strong>Touch</strong></h2>
                            </div>

                            {/*<div className="col-md-3">*/}

                            {/*    <div id="contact-left">*/}
                            {/*        <div className="vertical-heading">*/}
                            {/*            <h5>Get connected</h5>*/}
                            {/*            <h2>Get <br/>In <strong>Touch</strong></h2>*/}
                            {/*        </div>*/}
                            {/*        <div className="contact-left-m">*/}
                            {/*            <div id="offices">*/}
                            {/*                <div className="row">*/}
                            {/*                    <div className="col-md-12">*/}
                            {/*                        <div className="office">*/}

                            {/*                            <ul className="office-details">*/}
                            {/*                                <li><i className="fa fa-envelope-o"></i><a*/}
                            {/*                                    href="mailto:shawn@ktmanagers.com"*/}
                            {/*                                    target="_blank">shawn@ktmanagers.com</a></li>*/}
                            {/*                            </ul>*/}
                            {/*                        </div>*/}
                            {/*                    </div>*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*            <ul className="social-list contact-icon-s">*/}
                            {/*                <li className="instagram-bg-color">*/}
                            {/*                    <a href="https://www.instagram.com/ktmanagers" target="_blank">*/}
                            {/*                        <FaInstagram className="fa fa-instagram contact-icon-m insta-c-i contact-icon-margin"/>*/}
                            {/*                    </a>*/}
                            {/*                </li>*/}
                            {/*                <li className="facebook-bg-color">*/}
                            {/*                    <a href="https://www.facebook.com/ktmanagers/?ref=br_rs" target="_blank">*/}
                            {/*                        <FaFacebookF className="fa fa-facebook contact-icon-m face-c-i contact-icon-margin"/>*/}
                            {/*                    </a>*/}
                            {/*                </li>*/}
                            {/*            </ul>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            <div className="col-md-9 contact-main-form-s">
                                <div className="form-styles-c" id="contact-right">
                                    <form action="https://formspree.io/xkngaakg" method="POST">
                                        <h4 className="form-t-c">Send A Message</h4>
                                        <hr className="line-br-color"/>


                                        <ul className="office-details">
                                            <li>
                                                {/*<i className="fa fa-envelope-o"></i>*/}
                                                <a
                                                    href="mailto:shawn@ktmanagers.com"
                                                    target="_blank">shawn@ktmanagers.com</a>
                                            </li>
                                        </ul>


                                        <ul className="social-list contact-icon-s">
                                            <li className="instagram-bg-color">
                                                <a href="https://www.instagram.com/ktmanagers" target="_blank">
                                                    <FaInstagram className="fa fa-instagram contact-icon-m insta-c-i contact-icon-margin"/>
                                                </a>
                                            </li>
                                            <li className="facebook-bg-color">
                                                <a href="https://www.facebook.com/ktmanagers/?ref=br_rs" target="_blank">
                                                    <FaFacebookF className="fa fa-facebook contact-icon-m face-c-i contact-icon-margin"/>
                                                </a>
                                            </li>
                                        </ul>








                                        <p className="form-p-c">For more information, please fill out our contact
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
                                                <div className="col-md-6 col-sm-6">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" name="phone"
                                                               placeholder="Phone No."/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-6">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" name="subject"
                                                               placeholder="Subject"/>
                                                    </div>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <p className="my-auto marg-top">
                                Copyright &copy; 2022 All Rights Reserved By <span>KNIGHT TEAM MANAGEMENT, LLC.</span>
                            </p>
                        </div>
                    </div>
                </div>


                <a href="#home" id="back-to-top"
                   className="btn btn-sm btn-red btn-back-to-top smooth-scroll hidden-sm hidden-xs" title="home"
                   role="button"><i
                    className="fa fa-angle-up"></i>
                </a>


            </footer>
        </>
    );
};

export default Footer;
