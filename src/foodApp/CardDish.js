import React from "react";
import { useNavigate } from "react-router";

function CardDish(props) {
  // let i;

     const navigate = useNavigate();
  
  // let maxIngredients = 12;

  // const getTotalIngredients = ()=> {

  //   for( i = 0; i < maxIngredients; ++i) {
  //     console.log("this is from card dish first", i)

  //   }
  // }
  // getTotalIngredients()
    // console.log("this is from card dish second", i)
     return (
          <li>
               <div
                    onClick={() => {
                         // Navigate to AddToCart with the dishName and dishImage
                         navigate("/cart", {
                              state: {
                                   dishName: props.menuItems.strMeal,
                                   dishImage: props.menuItems.strMealThumb,
                                   allMenus: props.menuItems,
                              },
                         });
                    }
               }
               >
                    <img src={props.menuItems.strMealThumb} className="mapped-image" />
                    <h5>{props.menuItems.strMeal}</h5>
               </div>
          </li>
     );
}

export default CardDish;
