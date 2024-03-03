import { useState, useContext } from "react";
import { StateContext } from "../context/AppProvider";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { all } from "axios";

function AddToCart() {
     const location = useLocation();
     const { dishImage } = location.state || {};
     const { dishName } = location.state || {};
     const { menuItems } = location.state || {};

     let [receipe, setReceipe] = useState(menuItems)
     console.log("from", menuItems);
     // console.log("fto", receipe.strIngredient)
  
     // let ingredients = []

     // for(let i = 0; i <= 20; ++i) {
     //     ingredients = ``
     // }

     const navigate = useNavigate();
     const cartPackage = useContext(StateContext);

     const cartRedirector = () => {
          navigate("/checkout");
     };


    let number =1;
     return (
          <div className="add-to-cart-padding">
               <div>
                    <img src={dishImage} />
               </div>
               <div>
               {/* <h4>{allMenus.strTags}</h4> */}
             
               <div>
                    <h4>{dishName}</h4>
                    <i class="fa-regular fa-bookmark"></i>
               </div>
               <div>
               
                {/* <h4>{allMenus.strInstructions}</h4> */}
                {/* <h4>{allMenus.ser}</h4> */}
               </div>
               <div className="cartControl d_flex">
                    <button className="desCart">
                         <i className="fa-solid fa-minus"></i>
                    </button>
                    <h4 className="quantity">4</h4>

                    <button className="incCart">
                         <i className="fa-solid fa-plus"></i>
                    </button>
               </div>
               </div>
          </div>
     );
}

export default AddToCart;
