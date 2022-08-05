import React, {useState, useEffect} from 'react';
import {FaFacebook, FaInstagram, FaRegEye, FaRegHandshake, FaTwitter, FaYoutube} from "react-icons/fa";
import {client, urlFor} from "../client";
import {useParams} from "react-router-dom";
import {images} from "../constants";
import {AiOutlineLineChart} from "react-icons/ai";

import './scss/Influencer.scss';

function Influencer() {
    const [singleInfluencer, setSingleInfluencer] = useState(null);
    const {slug} = useParams();

    useEffect(() => {
        client.fetch(`*[slug.current == "${slug}"]{
            name,
            _id,
            slug,
            imageUrl{
                asset->{
                    _id,
                    url
                }
            }
        }`).then((data) => setSingleInfluencer(data[0]))
            .catch(console.error)
    }, [slug]);

    if(!singleInfluencer) return <div>Loading.....</div>


    return (
        <>


            <section id="about">

                {/* About 01 */}
                <div className="about-01">
                    <div className="content-box-main">
                        <div className="container">

                            {/* About Bottom */}
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="about-bottom">
                                        <img src={urlFor(singleInfluencer.imageUrl).width(400).height(400).url()} alt="About Us" className="img-responsive"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* About 02 */}

            </section>



            <div className='show-button'>
                <a href='mailto:shawn@ktmanagers.com?subject=I am interested in Mimi promoting my brand' target='_blank'>
                    <button className='btn btn-client-book btn-red'>Book {singleInfluencer.name} to promote your brand!</button>
                </a>
                <hr/>

                <a href='https://www.instagram.com/mimifaust' target='_blank'>
                    <button className='btn btn-social-i btn-instagram'>
                        <FaInstagram/>
                    </button>
                </a>
                <a href='https://www.facebook.com/officialmimifaust' target='_blank'>
                    <button className='btn btn-social-i-f btn-facebook'>
                        <FaFacebook/>
                    </button>
                </a>
                <a href='https://twitter.com/mimifaust' target='_blank'>
                    <button className='btn btn-social-i-t btn-twitter'>
                        <FaTwitter/>
                    </button>
                </a>
            </div>

            <hr/>
        </>
    );
}

export default Influencer;