import React, {useState, useEffect} from 'react';
import {HiMenuAlt4, HiX} from "react-icons/hi";
import {images} from "../../constants";
import './Navbar.scss';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    // setting initial value to true
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50);
        });
    }, []);


    return (

        <nav className={scroll ? "app__navbar app__navbar-scroll" : "app__navbar"}>
            <div className='app__navbar-logo'>
                <img src={scroll ? images.logo3 : images.logo2} alt="logo"/>
            </div>
            <ul className='app__navbar-links'>
                {['home','about','work','skills','contact'].map((item)=> (
                    <li className='app__flex p-text' key={`link-${item}`}>
                        <div/>
                        <a className={scroll ? 'navbar__links-color-scroll' : 'navbar__links-color'} href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>

            <div className='app__navbar-menu'>
                <HiMenuAlt4 onClick={() => setToggle(true)}/>

                {toggle && (
                    <div
                        // whileInView={{x: [300, 0]}}
                        // transition={{duration: 0.85, ease: 'easeOut'}}
                    >
                        <HiX onClick={() => setToggle(false)}/>
                        <ul>
                            {['home','about','work','skills','contact'].map((item)=> (
                                <li key={item}>
                                    <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </nav>













        // <header>
        //     <nav className={scroll ? "navbar navbar-fixed-top mobile-nav-top" : "navbar navbar-fixed-top mobile-nav-top white-nav-top"}>
        //         <div className="container-fluid">
        //             <div className="site-nav-wrapper">
        //                 <div className="navbar-header">
        //                     <span id="mobile-nav-open-btn">&#9776;</span>
        //
        //                     <a className="navbar-brand smooth-scroll logo-rsz" href="#home">
        //                         <img src="img/kt_logo/new_logo/knight-team-management-logo-dark.png" className={scroll ? "img-rsz" : "img-rsz"}
        //                              alt="logo"/>
        //                     </a>
        //                 </div>
        //                 <div className="container">
        //                     <div className="collapse navbar-collapse">
        //                         <ul className="nav navbar-nav pull-right">
        //                             <li><a className="smooth-scroll ipad-m" href="#home">Home</a></li>
        //                             <li><a className="smooth-scroll ipad-m" href="#about">About</a></li>
        //                             <li><a className="smooth-scroll ipad-m" href="#brands">Brands</a></li>
        //                             <li><a className="smooth-scroll ipad-m" href="#portfolio">Influencers</a></li>
        //                             <li><a className="smooth-scroll ipad-m" href="#offers">What We Offer</a></li>
        //                             <li><a className="smooth-scroll ipad-m" href="#services">Video/Media</a></li>
        //                             <li><a className="smooth-scroll ipad-m" href="#team">Team</a></li>
        //                             <li><a className="smooth-scroll ipad-m" href="#portfolio-2">Addl. Services</a></li>
        //                             <li><a className="smooth-scroll ipad-m" href="#contact">Contact</a></li>
        //                         </ul>
        //                     </div>
        //                 </div>
        //
        //                 <div id="mobile-nav">
        //                     <span id="mobile-nav-close-btn">&times;</span>
        //                     <div id="mobile-nav-content">
        //                         <ul className="nav">
        //                             <li><a className="smooth-scroll ipad-m" href="#home">Home</a></li>
        //                             <li><a className="smooth-scroll ipad-m" href="#about">About</a></li>
        //                             <li><a className="smooth-scroll ipad-m" href="#brands">Brands</a></li>
        //                             <li><a className="smooth-scroll ipad-m" href="#portfolio">Influencers</a></li>
        //                             <li><a className="smooth-scroll ipad-m" href="#offers">What We Offer</a></li>
        //                             <li><a className="smooth-scroll ipad-m" href="#services">Video/Media</a></li>
        //                             <li><a className="smooth-scroll ipad-m" href="#team">Team</a></li>
        //                             <li><a className="smooth-scroll ipad-m" href="#portfolio-2">Addl. Services</a></li>
        //                             <li><a className="smooth-scroll ipad-m" href="#contact">Contact</a></li>
        //                         </ul>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </nav>
        // </header>
    );
};

export default Navbar;
