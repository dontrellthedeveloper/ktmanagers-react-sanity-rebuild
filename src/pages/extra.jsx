
// <div>
//     <div>
//         <p className='offer-p-detail show-page-name-s offer-subheading' style={{fontWeight: '600'}}>
//             HAVE YOU BEEN QUOTED AND READY TO PAY?
//         </p>
//     </div>

//     <div>

//         <div style={{textAlign: 'center', margin: '30px auto'}}>
//             <input placeholder='Enter Quoted Amount...' type="text"  ref={priceRef} />
//             <button onClick={onHandlePay} className='btn btn-general btn-red' type="button">
//                 Confirm
//             </button>
//         </div>

//         <p className='offer-p-detail show-page-name-s offer-subheading'>
//             Quoted Amount: ${product.price}
//         </p>
//     </div>

//     <div className="pricing-btn offer-button-page" style={{marginBottom: '60px', marginTop: '20px'}}>
//         <button onClick={() => setToggle(!toggle)} className='btn btn-general btn-pay' type="button">
//             <span className='pay-quote-button-styles'>CLICK HERE TO PAY NOW</span>
//         </button>
//     </div>



//     {toggle && (

//         <div>
//             <hr/>
//             <div className='paypal-button-styles'>
//                 <PayPalScriptProvider options={{"client-id": process.env.REACT_APP_PAYPAL_LIVE}}>
//                     <PayPalButtons
//                         createOrder={(data, actions) => {
//                             return actions.order.create({
//                                 purchase_units: [
//                                     {
//                                         amount: {
//                                             value: priceRef.current.value
//                                         }
//                                     }
//                                 ]
//                             })
//                         }}
//                         onApprove={(data, actions) =>{
//                             return actions.order.capture().then(function (details){
//                                 toast.success("Transaction completed by " + details.payer.name.given_name + ". You will receive an email confirmation shortly");
//                             })
//                         }}
//                     />
//                 </PayPalScriptProvider>
//             </div>

//         </div>

//         )}

// </div>