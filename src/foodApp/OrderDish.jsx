import React, { useContext } from "react";
import { StateContext } from "../context/AppProvider";
// import './Order.css'

function OrderDish() {
     const cartedItems = useContext(StateContext);
     console.log("carted items", cartedItems);
     let cartedDishItems = cartedItems.cartItems.map((items, index) => {
          return (
               <div className="delivery-detail" key={index}>
                    <img src={items.img} />
                    <h3>{items.title}</h3>
                    <div>
                         <img width="48" height="48" src="https://img.icons8.com/color/48/add--v1.png" alt="add--v1" />
                         <img width="50" height="50" src="https://img.icons8.com/ios/50/minus.png" alt="minus" />
                    </div>
                    <span>800</span>
               </div>
          );
     });

     return (
          <div className="order-container">
               <div className="order-wrapper">
                    {cartedDishItems}

                    <div className="payment-detail-wrapper">
                         <div className="payment-detail">
                              <ul className="money-detail style">
                                   <li>Dish Name</li>
                                   <li>Dish money</li>
                                   <li>CGST</li>
                                   <li>SGST</li>
                                   <li>Packing charge</li>
                                   <li>Total amount to pay</li>
                              </ul>
                              <ul className="amount style">
                                   <li>: Dish name here</li>
                                   <li>: Dish amount here</li>
                                   <li>: Cgst amount here</li>
                                   <li>: Sgst amount here</li>
                                   <li>: Packing charge here</li>
                                   <li>: Total amount here</li>
                              </ul>
                         </div>

                         <ul className="style condition-list">
                              <li>Review your order and address details to avoid cancellations</li>
                              <li>If you choose to cancel, you can do it within 60 seconds after placing the order.</li>
                              <li>Post 60 seconds, you will be charged a 100% cancellation fee.</li>
                              <li>
                                   However, in the event of an unusual delay of your order, you will not be charged a
                                   cancellation fee.
                              </li>
                              <li>
                                   This policy helps us avoid food wastage and compensate restaurants / delivery partners
                                   for their efforts.
                              </li>
                              <li>
                                   {" "}
                                   <button>Confirm Any Way</button>
                              </li>
                         </ul>
                    </div>
                    <div className="confirmation-btn">
                         <p>Pay method</p>
                         <button>Upi payment</button>
                         <button>Cash on Delivery</button>
                         <button>Credit card</button>
                    </div>
               </div>
          </div>
     );
}

export default OrderDish;
