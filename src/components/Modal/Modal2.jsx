import React, { useState,useEffect, useRef } from "react";
import "./Modal.css";
import {client, urlFor} from "../../client";

import Modal from 'react-modal';
import { IoClose } from "react-icons/io5";

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 0, 
    border: 'none',
    maxWidth: '1000px',
    overflow: 'scroll',
  },
  overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.75)'
    },
};


function ModalComp() {
  const [singleOffer, setSingleOffer] = useState(null);
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
      setIsOpen(true);
  }

  function openModal2() {
      setIsOpen(true);
  }

  function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#000';
  }

  function closeModal() {
      setIsOpen(false);
  }

  function closeModal2() {
      setIsOpen(false);
  }

  useEffect(() => {
    client.fetch(`*[_type == "offer" && slug.current == 'offer']{
        _id,
        slug,
        title,
        subTitle,
        subTitleB,
        offerDescription1,
        consultationDescription,
        multiInfluencerDescription,
        moreInfoDescriptionBox1,
        moreInfoDescriptionBox2,
        moreInfoDescriptionBox3,
        prMarketingDescription,
        moreInfo2DescriptionBox1,
        moreInfo2DescriptionBox2,
        moreInfo2DescriptionBox3,
        bookingLink,
        bookingLinkTitle,
        title2,
        subTitle2,
        offerDescription2,
        moreInfoTitle1,
        moreInfoDescription1,
        moreInfoLink1,
        moreInfoTitle2,
        moreInfoDescription2,
        moreInfoLink2,
        moreInfoTitle3,
        moreInfoDescription3,
        moreInfoLink3,
        moreInfoTitle4,
        moreInfoDescription4,
        moreInfoLink4,
        title3,
        subTitle3,
        offerDescription3,
        moreInfo2Title1,
        moreInfo2Description1,
        moreInfo2Link1,
        moreInfo2Title2,
        moreInfo2Description2,
        moreInfo2Link2,
        moreInfo2Title3,
        moreInfo2Description3,
        moreInfo2Link3,
        moreInfo2Title4,
        moreInfo2Description4,
        moreInfo2Link4,
        title4,
        subTitle4,
        offerDescription4,
        title5,
        subTitle5,
        offerDescription5,
        title6,
        subTitle6,
        offerDescription6,
        title7,
        subTitle7,
        offerDescription7,
        title8,
        subTitle8,
        offerDescription8,
        title9,
        subTitle9,
        offerDescription9,
        title10,
        subTitle10,
        offerDescription10,
    }`).then((data) => setSingleOffer(data[0]))
        .catch(console.error);
}, []);


  if(!singleOffer) return (
    <div className="preloader">
        <div className="status"></div>
    </div>
)


  return (
    <>
   <div className='template-p-detail'>

        <a  
        className='btn pay-btn-navbar btn-moreInfo'
        onClick={openModal}
        type="button">

        <span className='pay-quote-button-styles'>LEARN MORE</span>

        </a>
        </div>
    <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        
        style={customStyles}
        contentLabel="Example Modal"
    >                     
        <div className="map-color-6" style={{backgroundColor: 'transparent', paddingBottom: '0'}}>
            <div className="container">
                <div className="row" style={{paddingLeft: '0', paddingRight: '0'}}>
                    <div id="content" style={{paddingLeft: '0', paddingRight: '0'}}>

                        <section id="map-section" className="inner over client-section-b">
                            <div className="row-show port-popup show-page-image-s">
                            </div>

                            <div className="desc map-color-8 container-paragraph offering-info"
                            style={{width: '100%', marginTop: '0', marginBottom: '0', border: 'none'}}
                            >
                                <div className="map-paragraph">
                                    
                                <button onClick={closeModal}><IoClose /></button>
                                {singleOffer.subTitle3 && (
                                    <h3 className="i-map-paragraph"><b className='show-page-name-s'>
                                    {singleOffer.subTitle3}
                                    </b></h3>
                                    )}

                                    <hr/>

                                    {singleOffer.moreInfo2Title1 && (
                                        <h4 className='i-map-paragraph show-page-name-s offer-subheading'>
                                        {singleOffer.moreInfo2Title1}
                                        
                                        </h4>
                                    )}



                                    {singleOffer.moreInfo2DescriptionBox1 && (
                                        <div className='show-button'>
                                            <div className='offer-p-detail'>
                                    
                                                <ReactMarkdown children={singleOffer.moreInfo2DescriptionBox1} remarkPlugins={[remarkGfm]} />
                                            </div>
                                            
                                            <div className='template-p-detail'>
                                            {singleOffer.moreInfo2Link1 && (
                                                <a
                                                href={singleOffer.moreInfo2Link1}
                                                target='_blank'
                                                style={{cursor: 'pointer'}}
                                                className='email__design-s'>[OPTIONAL LINK]</a>
                                                )}
                                            </div>
                                            

                                            <hr/>
                                        </div>
                                    )}

                                    {singleOffer.moreInfo2Title2 && (
                                        <h4 className='i-map-paragraph show-page-name-s offer-subheading'>
                                
                                        {singleOffer.moreInfo2Title2}
                                        </h4>
                                    )}



                                    {singleOffer.moreInfo2DescriptionBox2 && (
                                        <div className='show-button'>
                                            <div className='offer-p-detail'>
                                            <ReactMarkdown children={singleOffer.moreInfo2DescriptionBox2} remarkPlugins={[remarkGfm]} />
                                            </div>
                                            
                                            <div className='template-p-detail'>
                                            {singleOffer.moreInfo2Link2 && (
                                                <a
                                                href={singleOffer.moreInfo2Link2}
                                                target='_blank'
                                                style={{cursor: 'pointer'}}
                                                className='email__design-s'>[OPTIONAL LINK]</a>
                                                )}
                                            </div>
                                            

                                            <hr/>
                                        </div>
                                    )}
                
                                    {singleOffer.moreInfo2Title3 && (
                                        <h4 className='i-map-paragraph show-page-name-s offer-subheading'>      
                                        {singleOffer.moreInfo2Title3}
                                        </h4>
                                    )}



                                    {singleOffer.moreInfo2DescriptionBox3 && (
                                        <div className='show-button'>
                                            <div className='offer-p-detail'>
                                            <ReactMarkdown children={singleOffer.moreInfo2DescriptionBox3} remarkPlugins={[remarkGfm]} />
                                            </div>
                                            
                                            <div className='template-p-detail'>
                                            {singleOffer.moreInfo2Link3 && (
                                                <a
                                                href={singleOffer.moreInfo2Link3}
                                                target='_blank'
                                                style={{cursor: 'pointer'}}
                                                className='email__design-s'>[OPTIONAL LINK]</a>
                                                )}
                                            </div>
                                            

                                            {/* <hr/> */}
                                        </div>
                                    )}
                

                
                
                                    {/* <hr className='show-break-style'/>
                                    <div className='template-p-detail'>

                                        More information?
                                        Please contact <a
                                        className='email__design-s'
                                        href='mailto:shawn@ktmanagers.com'
                                        target='_blank'>shawn@ktmanagers.com</a>
                                    </div> */}
                                </div>
                            </div>
                            {/* Services Component */}
                        </section>
                        
                    </div>
                </div>
            </div>
        </div>
    </Modal>
     </>
  );
}


export default ModalComp;