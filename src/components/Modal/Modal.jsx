import React, { useState,useEffect, useRef } from "react";
import "./Modal.css";
import {client, urlFor} from "../../client";

import Modal from 'react-modal';
import { IoClose } from "react-icons/io5";


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
      backgroundColor: 'rgba(0, 0, 0, 0.65)'
    },
};


function ModalComp2() {
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
        offerDescription1,
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
                                                    style={{cursor: 'pointer'}}
                                                    onClick={openModal}
                                                    className='email__design-s'>[LEARN MORE]</a>
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
                                                                            {singleOffer.subTitle2 && (
                                                                                <h3 className="i-map-paragraph"><b className='show-page-name-s'>
                                                                                {singleOffer.subTitle2}
                                                                                </b></h3>
                                                                                )}

                                                                                <hr/>

                                                                                {singleOffer.moreInfoTitle1 && (
                                                                                    <h4 className='i-map-paragraph show-page-name-s offer-subheading'>
                                                                                    {singleOffer.moreInfoTitle1}
                                            
                                                                                    </h4>
                                                                                )}



                                                                                {singleOffer.moreInfoDescription1 && (
                                                                                    <div className='show-button'>
                                                                                        <div className='offer-p-detail'>
                                                                                            {singleOffer.moreInfoDescription1}
                                                                                   
                                                                                        </div>
                                                                                        
                                                                                        <div className='template-p-detail'>
                                                                                        {singleOffer.moreInfoLink1 && (
                                                                                            <a
                                                                                            href={singleOffer.moreInfoLink1}
                                                                                            target='_blank'
                                                                                            style={{cursor: 'pointer'}}
                                                                                            className='email__design-s'>[OPTIONAL LINK]</a>
                                                                                            )}
                                                                                        </div>
                                                                                        

                                                                                        <hr/>
                                                                                    </div>
                                                                                )}

                                                                                {singleOffer.moreInfoTitle2 && (
                                                                                    <h4 className='i-map-paragraph show-page-name-s offer-subheading'>
                                                                            
                                                                                    {singleOffer.moreInfoTitle2}
                                                                                    </h4>
                                                                                )}



                                                                                {singleOffer.moreInfoDescription2 && (
                                                                                    <div className='show-button'>
                                                                                        <div className='offer-p-detail'>
                                                                                    

                                                                                            {singleOffer.moreInfoDescription2}
                                                                                        </div>
                                                                                        
                                                                                        <div className='template-p-detail'>
                                                                                        {singleOffer.moreInfoLink2 && (
                                                                                            <a
                                                                                            href={singleOffer.moreInfoLink2}
                                                                                            target='_blank'
                                                                                            style={{cursor: 'pointer'}}
                                                                                            className='email__design-s'>[OPTIONAL LINK]</a>
                                                                                            )}
                                                                                        </div>
                                                                                        

                                                                                        <hr/>
                                                                                    </div>
                                                                                )}
                                                            
                                                                                {singleOffer.moreInfoTitle3 && (
                                                                                    <h4 className='i-map-paragraph show-page-name-s offer-subheading'>      
                                                                                    {singleOffer.moreInfoTitle3}
                                                                                    </h4>
                                                                                )}



                                                                                {singleOffer.moreInfoDescription3 && (
                                                                                    <div className='show-button'>
                                                                                        <div className='offer-p-detail'>
                                                                                        

                                                                                        {singleOffer.moreInfoDescription3}
                                                                                        </div>
                                                                                        
                                                                                        <div className='template-p-detail'>
                                                                                        {singleOffer.moreInfoLink3 && (
                                                                                            <a
                                                                                            href={singleOffer.moreInfoLink3}
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


export default ModalComp2;