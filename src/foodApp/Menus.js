import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import React, { useEffect } from "react";
import { useState } from "react";
import HeroSection from "./HeroSection";
import SpecialDishes from "./SpecialDishes";
import "./styles.scss";
import FilteredDishes from "./FilterdDishes";
import { AllMenus } from "./AllMenuContext";
import CheckOut from "./CheckOut";
import Header from "./Header";
import SectionData from "./SectionData";
import { AppProvider } from "../context/AppProvider";
import { Footer } from "./Footer";
import Login from "./Login";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Popup from "./Popup";
import MenuSearch from "./MenuSearch";
import MenuSearchWrapper from "./MenuSearchWrapper";
import SearchedItems from "./SearchedItems";
import AddToCart from "./AddToCart";

// LETS CREATE A GLOBAL STATE HERE

function Menus() {
     let [filterMenu, setFilterMenu] = useState([]);
     let [singleMenu, setsingleMenu] = useState([]);

     const location = useLocation();

     async function getFilteredDishes() {
          const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";
          let response = await fetch(API_URL);
          let data = await response.json();
          setFilterMenu(data.categories);
     }

     //____________THIS IS FOR SETTING 'BEEF AS ACTIVE______________ '
     async function getSingleMenu() {
          const API_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?i=Beef";
          let response = await fetch(API_URL);
          let data = await response.json();
          setsingleMenu(data.meals);
     }

     useEffect(() => {
          getFilteredDishes();
          getSingleMenu();
     }, []);

     // ________________LOGIN HANDLER_______________
     const [loginState, setLoginState] = useState("");

     const [loginChecker, setLoginChecker] = useState(false);

     const handleClick = (event) => {
          setLoginState(event.target.value);
          // alert("sucess")
     };

     const loginHandler = (event) => {
          event.preventDefault();

          if (loginState.trim().length !== 0) {
               setLoginChecker(true);
          } else {
               setLoginChecker(false);
          }
     };

     //    LETS NAVIGATE TO CHECKOUT PAGE
     const navigate = useNavigate();

     const navigateCheckoutHandler = (dishName, dishImage) => {
          console.log("dishImage", dishName);
          <CheckOut dImage={dishImage} dName={dishName} />;
          navigate("/checkout");
          console.log("dishImage2", dishName)
     };

     const isHomePage = location.pathname === "/home";

     return (
          // <BrowserRouter>
          <AppProvider>
               <Header />
               {isHomePage && <HeroSection />}
               <Routes>
                    <Route
                         path="/home"
                         element={
                              <AllMenus>
                                   <MenuSearchWrapper>
                                        <MenuSearch />
                                   </MenuSearchWrapper>
                                   <FilteredDishes
                                        filterMenu={filterMenu}
                                        singleMenu={singleMenu}
                                        setsingleMenu={setsingleMenu}
                                   />
                                   <SpecialDishes loginChecker={loginChecker} />
                              </AllMenus>
                         }
                    />
                    <Route
                         path="/search"
                         element={<SearchedItems searchedItemsNavigationHandler={navigateCheckoutHandler} />}
                    />

                    <Route path="/checkout" element={<CheckOut />} />

                    <Route exact path="/" element={<Login loginHandler={loginHandler} handleClick={handleClick} />} />
                    <Route exact path="/cart" element={<AddToCart />} />
                    
               </Routes>
          </AppProvider>
          //     </BrowserRouter>
     );
}

export default React.memo(Menus);
