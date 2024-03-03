import { useContext } from 'react'
import { StateContext } from '../context/AppProvider'
import OrderDish from './OrderDish'
import Map from './Map'
import StripeCheckout from 'react-stripe-checkout';
// import {Maps, GoogleApiWrapper} from 'google-map-react'

import React from 'react'

function CheckOut({dImage, dName}) {
  
console.log("from checkout", dName)

  const cartPackage = useContext(StateContext)

  // FOR STRIPE PAYMENT
  const onToken = (token)=> {
    console.log("the ", token)
  }

  return (
 
    <div className='checkout-container'>
        
        { cartPackage.cartItems.map((items, index)=> { 
            return(
                // <div className="checkout-container-wrapper">
                    <div className='f_flex checkout-icons'>
                        <img src={items.img} key={index}/>
                        <h4>{items.title}</h4>
                      
                         <i class="fa-solid fa-plus"></i>
                         <i class="fa-solid fa-minus"></i>
                   
                        <span>Amount</span>
                     
                       
                 </div> 
            )
                      })}
                    
                      
        <div className="checkout-container-lists ">
                <ul className="money-detail style">
                   
                    <li>Dish money</li>
                    <li>CGST</li>
                    <li>SGST</li>
                    <li>Discount</li>
                    <li>Packing Charge</li>
                    <li>Packing Charge</li>
                    <li>Total amount to pay</li>

                </ul>
                <ul className="amount style">
                    
                    <li> : 800</li>
                    <li> : 400</li>
                    <li> : 200</li>
                    <li>: 688</li>
                    <li>: 44</li>
                    <li> : 5</li>
                    <li> : 1200</li>
            {/* <StripeCheckout
            token={onToken}
            amount = "$$8999"
            stripeKey="pk_test_51OUmsmSEK2ICB9oRHFofNhmINI7Jb6UpLkACS7vEXk0rogjmHXikLKeDHjUmjHWMCLPRjzHM9Clk9ZiFD1eKU9VO00NVlsuO5J"
          /> */}
                
                    
                </ul>
            
            </div>
            </div>
            
            
            // {/* <OrderDish /> */}
            // {/* <Map/> */}


            // </div>
            
  )
} 

export default CheckOut;

