import React, { useContext, useState } from "react";
import { AllMenuContext } from "./AllMenuContext";
import { useNavigate } from "react-router";

const MenuSearch = () => {


    const allMenus = useContext(AllMenuContext)
    
   const getUserInput = (event)=> {
        console.log("")
   }

   const navigate = useNavigate()

    const handleSearchDish = ()=> {
        navigate('/search')
        
    }
     
     const [searchBar, setSearchBar] = useState(false);
     const showSearchBar = () => {
          if (window.scrollY >= 150) {
               setSearchBar(true);
          } else {
               setSearchBar(false);
          }
     };

     window.addEventListener("scroll", showSearchBar);

     return (
          <div className="nav-menu-search">
               <div className="search-box nav-menu-search-f_flex">
                    <h3 className="category-heading">Categories
                    <i class="fa-solid fa-arrow-down"></i></h3>
                    <input
                         type="text"
                         placeholder="Search food by area..."
                         className={searchBar ? "show-menu-search " : "hide-menu-search"}
                         onChange={getUserInput}
                         onClick={handleSearchDish}
                    />
                         <i className="fa fa-search menu-search-hover" ></i>
                    <div className="nav-menu-search-f_flex-left-side">
                         {/* <span>Wishlist</span>
                         <span>Offer</span> */}
                         <i className="fa-regular fa-heart"></i>
                         <i className="fa-regular fa-user"></i>
                         <i className="fa-solid fa-cart-shopping"></i>
                    </div>
               </div>
          </div>
     );
};

export default MenuSearch;
