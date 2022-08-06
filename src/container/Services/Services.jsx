import React, {useEffect, useState}  from 'react';
import './Services.scss';
import {client} from "../../client";

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        const query = '*[_type == "service"] | order(order asc)';



        client.fetch(query)
            .then((data) => {
                setServices(data)
            })

    },[])

    return (
        <section id="offers">
            <div className="content-box-md-brands" style={{backgroundColor: '#fff'}}>
                <div className="container">
                    <div className="vertical-heading">
                        <h5 style={{top: '72px'}}>What We Offer</h5>
                        <h2>Primary <strong>Services</strong><br/>We Offer!</h2>
                    </div>
                    <div className="container row">
                        <div style={{marginTop: '30px'}} className="col-md-12 text-center">

                            {services.map((service, index) => (
                                <div key={service.name + index}>
                                    <h4 className="brand-thin offer-header">{service.name}</h4>

                                    {service.serviceDescription1 && (
                                        <h4 className="brand-thin offer-text">{service.serviceDescription1}</h4>
                                    )}

                                    {service.serviceDescription2 && (
                                        <h4 className="brand-thin offer-text">{service.serviceDescription2}</h4>
                                    )}

                                    {service.serviceDescription3 && (
                                        <h4 className="brand-thin offer-text">{service.serviceDescription3}</h4>
                                    )}

                                    {service.serviceDescription4 && (
                                        <h4 className="brand-thin offer-text">{service.serviceDescription4}</h4>
                                    )}

                                    {service.serviceDescription5 && (
                                        <h4 className="brand-thin offer-text">{service.serviceDescription5}</h4>
                                    )}

                                    {service.serviceDescription6 && (
                                        <h4 className="brand-thin offer-text">{service.serviceDescription6}</h4>
                                    )}

                                    {service.serviceDescription7 && (
                                        <h4 className="brand-thin offer-text">{service.serviceDescription7}</h4>
                                    )}

                                    {service.serviceDescription8 && (
                                        <h4 className="brand-thin offer-text">{service.serviceDescription8}</h4>
                                    )}

                                    {service.serviceDescription9 && (
                                        <h4 className="brand-thin offer-text">{service.serviceDescription9}</h4>
                                    )}

                                    {service.serviceDescription10 && (
                                        <h4 className="brand-thin offer-text">{service.serviceDescription10}</h4>
                                    )}


                                    <hr className='offer-break'/>
                                </div>

                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
