import React, { useContext } from "react";

import axios, { all } from "axios";
import { useEffect, useState } from "react";
import SearchedItemsData from "./SearchedItemsData";
import CheckOut from './CheckOut'
import { redirect, useNavigate } from "react-router";

const SearchedItems = ({searchedItemsNavigationHandler}) => {
     // getuserInput
     const[hideDefaultShower, setHideDefaultShower] = useState(false)
     const [getUserInputData, setGetUserInputData] = useState('')
     const getUserInput = (event) => {
          
          setGetUserInputData(event.target.value)
          
     };
     
     
     // LETS HIDE THE SEARCHEDDISHES
     let [showCuisineDish, setShowCuisineDish] = useState()
     const hideSearchedCuisine = ()=> {
          setShowCuisineDish(false)
     }
 

     // FROM ONCLICK FUNCTION
     const handleUserInputData = (searchedItem)=> {
          setShowCuisineDish(true)
          {showCuisineDish && getCategoryItem(searchedItem)}    
     }

     

     // GET USER SEARCHED ITEMS HERE
     let [userInputDish, setUserInputDish] = useState("canadian");
     let [usersData, setUsersData] = useState([]);

     async function getCategoryItem(searchedItem) {
          setLoading(false);
          setUserInputDish(searchedItem);
          

          const API_URL = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${userInputDish}`;
          
          try {
               let response = await axios.get(API_URL);

               let data = response.data.meals;

               setUsersData(data);
              
          } 
          
        
          catch (error) {
               console.error("Error:", error.message);
          } finally {
               setLoading(false);
               
          }
         
       
     }
     const navigate = useNavigate()
     
     const handleCusineItem = (dishName, dishImage)=> {
          searchedItemsNavigationHandler(dishName, dishImage)
          
     }
  
// _________________

     let dishToShow = 12
     const usersSearchData  = usersData && usersData.length > 0 ? ( usersData.slice(0, dishToShow).map((item, index) => (
     
               <div className="usersSearchData-single-set" onClick={()=> handleCusineItem(item.strMeal, item.strMealThumb)} key={index}>
                  
      <div className="user-searched-cuisine-contents" key={index}>
        <img src={item.strMealThumb} alt={`Meal ${index}`} />
        <h4>{item.strMeal}</h4>
      </div>

      {SearchedItemsData[index] && (
                         <div className="searched-data-container">
                                   <p className="banner-searched">{SearchedItemsData[index].banner}  <i className="fa-solid fa-arrow-up-short-wide"></i></p>
                                  
                              <div className="flex searched-data-rating">
                              <i className="fa-solid fa-star"></i>

                              <p>{SearchedItemsData[index].rating}</p>
                              <p>{SearchedItemsData[index].dTime}</p>
                              </div>

                              <p className="searched-data-amount">${SearchedItemsData[index].price}</p>
                              </div>
                    )}

               </div>
       
  
    ))) : null;
  
// _________________

// LETS SHOW SORTING HERE
const [displaySorting, setDisplaySorting] = useState(false)
const showSortValues = ()=> {
     setDisplaySorting(!displaySorting)
}









     //DEFAULT SHOW SOME DISHES ___

     let [menuState, menuStateFunction] = useState([]);
     let [loading, setLoading] = useState(false);
     async function getMenuItems() {
        
          setLoading(true);
          const API_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?a=indian";
          let response = await fetch(API_URL);
          let data = await response.json();
          menuStateFunction(data.meals);
          setLoading(false);
     }
     // console.log("me", menuState)
     useEffect(() => {
          getMenuItems();
     }, []);

     let totalDishToShow = 9;
     let categories = menuState.map((items, index) => {
          if (index < totalDishToShow) {
               return (
                    <div key={index}>
                         <img src={items.strMealThumb} />
                         <h4>{items.strMeal}</h4>
                    </div>
               );
          }
     });

     return (
          <div className="search-items-container ">
               <div className="search-bar-div" >
                    <input type="text" placeholder="What's on your mind..."
                     className="input-bar searchedItems-input-bar" onChange={getUserInput} autoFocus/>
                    {usersSearchData && <i className="fa-solid fa-xmark" onClick={hideSearchedCuisine}></i>}
                    <i className=  " fa fa-search menu-search-hover searchedItems-icon" onClick={()=> {
                         handleUserInputData(getUserInputData)
                    }}></i>
               </div>
               <div className= {usersSearchData ? "hide-searchedItems-div" : "searchedItems-div"}>
                    <h3>Indian</h3>
                    <div className="flex searched-item-margin">
                         {categories}
                         </div>
               </div>
               <div className={usersSearchData ? "user-searched-after-div" : "hide-user-searched-after-div"} >
                 
                    <h4 onClick={showSortValues} className="user-searched-sorting">Sort by <i className="fa-solid fa-angle-down"></i>
                    </h4>
                   
                    <h4>Rated 4+</h4>
                    <h4>Fastest Delivery</h4>
                        {displaySorting && <ul className="user-searched-sorting-list">
                              <li><input type="radio" /> Rating (High - Low)</li>
                              <li><input type="radio" /> Delivery time</li>
                              <li><input type="radio" /> Price (High - Low)</li>
                              <li><input type="radio" /> Price (Low - High)</li>
                              {/* <li><input type="radio" /> Rating (High - Low)</li> */}
                         </ul>}
               </div>
               <div className="usersSearchData-background">

               {usersSearchData}
               </div>
          </div>
     );
};

export default SearchedItems;
// FROM ME