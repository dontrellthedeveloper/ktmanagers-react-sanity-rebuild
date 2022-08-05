import React from 'react';
import './Stats.scss';
import {FaFacebookSquare, FaInstagram, FaTwitter, FaYoutube} from "react-icons/fa";
import CountUp from 'react-countup';

const Stats = () => {
    return (
        <section id="stats">
            <div className="content-box-md-stats">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="vertical-heading">
                                <h5>Find Branding</h5>
                                <h2>Our Clients <strong>Have</strong> <br/><strong>Amazing </strong>Influence</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row social-links-margin">
                        <div className="col-md-3 col-sm-3 col-xs-6">

                            <div className="stats-item-i stats-item text-center">
                                <div>
                                    <FaInstagram className="stats-item-icon"/>
                                </div>
                                {/*<h3 className="counter">36,376,213</h3>*/}
                                <CountUp className='counter' separator="," end={36376213} duration={15}/>
                                <p>Instagram <br/> Followers</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-6">

                            <div className="stats-item-f stats-item text-center">
                                <div>
                                    <FaFacebookSquare className='stats-item-icon'/>
                                </div>
                                {/*<h3 className="counter">26,109,002</h3>*/}
                                <CountUp className='counter' separator="," end={26109002} duration={15}/>
                                <p>Facebook <br/> Followers</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-6">

                            <div className="stats-item-t stats-item text-center">
                                <div>
                                    <FaTwitter className='stats-item-icon'/>
                                </div>
                                {/*<h3 className="counter">13,992,401</h3>*/}
                                <CountUp className='counter' separator="," end={13992401} duration={15}/>
                                <p>Twitter <br/> Followers</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-6">
                            <div className="stats-item-y stats-item text-center">
                                <div>
                                    <FaYoutube className='stats-item-icon'/>
                                </div>
                                {/*<h3 className="counter">8,103,221</h3>*/}
                                <CountUp className='counter' separator="," end={8103221} duration={15}/>
                                <p>Youtube <br/> Subscribers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
