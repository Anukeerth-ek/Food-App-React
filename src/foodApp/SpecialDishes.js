import React, { useContext, useState } from "react";
import CardDish from "./CardDish";
import Popup from "./Popup";
import AddToCart from "./AddToCart";
import { AllMenuContext } from "./AllMenuContext";
import SectionData from "./SectionData";
import SpecialDishData from "./SpecialDishData";
import DishDetails from "./DishDetails";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useMemo } from "react";

function SpecialDishes({ loginChecker }) {
     // ___________NAVIGATE__________
     const navigate = useNavigate();

     let [showPopup, setShowPopup] = useState(false);
     let [currentDish, setCurrentDish] = useState([]);
     let [addCartItems, setAddCartItems] = useState([{}]);

     let dishLength = 12;

     const allMenus = useContext(AllMenuContext);

     // LETS SHOW THE POPUP FUNCTION HERE
     function getPopUp(dishName, dishImage) {
          // console.log("fro special", dishName);

          <AddToCart dishName={dishName} dishImage={dishImage} />;

          navigate("/cart");
     }

     function removePopup() {
          setShowPopup(false);
     }

     // Lets get the OrderedItem

     function addToCartHandler(dishImage, dishName) {
          setAddCartItems([
               ...addCartItems,
               {
                    dishImage: dishImage,
                    dishName: dishName,
               },
          ]);
     }

     // Lets get the dishItems
     let dishItems = allMenus.map((menuItems, index) => {
          if (index < dishLength) {
               const specialDishItem = SpecialDishData[index];
               return (
                    <div className="map-div-container" key={index}>
                         <CardDish menuItems={menuItems} addToCartHandler={addToCartHandler} displayPopup={getPopUp} />

                         <div className="map-container">
                              {/* <div> */}
                              <span className="span-money">${specialDishItem.realMoney}</span>
                              <button>Order NOw</button>
                              {/* </div> */}
                         </div>
                    </div>
               );
          }
     });

     // LETs ALTER THE SPECIALDISH

     return (
          <section className="special-dishes">
               <div className="container">
                    {/* <div className='special-dishes-content text-center'>
                <h2>Heading here</h2>
                <p> Beyond fulfilling our basic nutritional needs, it is a cultural and social experience that brings people together. From the aroma of freshly prepared dishes to the satisfying taste on our tongues, the act of eating nourishes not only our bodies but also our souls. </p>
            </div> */}

                    <div className="special-dishes-list ">
                         <h3>Top Trending dish today</h3>
                         <ul className="ul">{dishItems}</ul>
                    </div>

                    {/* <h3 className='guide-heading'>How this works</h3>
            <div className='guide-container'>
            {SectionData.map((items)=> {
                
                return(
                    <div className='wrapper'>
                        <img src={items.src} className='guide-img'/>
                        <h4>{items.title}</h4>
                    </div>
                )
            })}
             </div>  */}
               </div>
          </section>
     );
}

export default SpecialDishes;
