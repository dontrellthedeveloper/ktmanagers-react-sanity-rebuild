import React from 'react';
import './Statement.scss';
import {FaQuoteLeft, FaQuoteRight} from "react-icons/fa";

const Statement = () => {
    return (
        <section id="statement">
            <div className="content-box-lg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="tech-statement text-center">
                                <h3><FaQuoteLeft/> Social media is not just an activity; it is an
                                    investment of valuable time and resources. Surround yourself with people who not
                                    just support you and stay with you, but inform your thinking about ways to WOW your
                                    online presence <FaQuoteRight/></h3>
                                {/*<p>- Sean Gardner -</p>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Statement;