import React from 'react';
import './Media.scss';
import {Helmet} from "react-helmet";

const Media = () => {
    return (
        <section id="services">
            <div className="services-02">
                <div className="content-box-services">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="container">
                                <div className="vertical-heading">
                                    <h5>View Work</h5>
                                    <h2>Our <strong>Team</strong><br/><strong>In</strong> Action</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row video-margin">

                            <div id="myDiv">

                                <ul id="playlists" style={{display: 'none'}}>

                                    <li data-source="list=PLB-2M8Oy9LXZd1ulxrnxGe8nbITgC38-j"
                                        data-playlist-name="Knight Team Management"
                                        // data-thumbnail-path="img/kt_team/team_001.jpg"
                                    >
                                        <p className="minimalWhiteCategoriesTitle"><span
                                            className="minimalWhiteBold">Title: </span>Knight Team Management</p>
                                        <p className="minimalWhiteCategoriesType"><span
                                            className="minimalWhiteBold">Type: </span>Youtube Playlist</p>
                                        <p className="minimalWhiteCategoriesDescription"><span
                                            className="minimalWhiteBold">Description: </span>Knight Team Management's
                                            Video Playlist</p>
                                    </li>



                                </ul>
                            </div>


                        </div>
                    </div>


                </div>
            </div>


        </section>
    );
};

export default Media;
