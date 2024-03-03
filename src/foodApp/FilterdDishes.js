

import React, { useContext, useState } from 'react'
import Pagination from './Pagination';
import CardDish from './CardDish';
import Popup from './Popup';
import { AllMenuContext } from './AllMenuContext';
import SpecialDishData from './SpecialDishData';
import MenuSearch from './MenuSearch';

function FilteredDishes(props) {
    
  const allMenus = useContext(AllMenuContext)
 
    // Global Variables here
    let filterMenu = props.filterMenu;
  
         // States here
    //  let [filterState, setFilterState] = useState(props.currentMenu)
     let [filteredDishes, setFilteredState] = useState([])
     let [activeDish, setActiveDish] = useState('Beef')
     let [currentPage, setCurrentPage] = useState(1)
     let [itemsPerPage, setItemsPerPage] = useState(3)

     let [displayPopup, setDisplayPopup] = useState(false)
     let [orderState, setOrderState] = useState('')
     let indexOfLastDish = currentPage * itemsPerPage;
     let indexOfFirstDish = indexOfLastDish - itemsPerPage;

    let showTheseDishes = filteredDishes.slice(indexOfFirstDish, indexOfLastDish)


    function getPopUp(dishName) {
        <Popup removePopup={removePopUp} orderState={orderState}/>
        setDisplayPopup(true)
        setOrderState(dishName)
      
      
        
    }
    function removePopUp() {
        setDisplayPopup(false)
    }
    
        // ONclick dishhere
  function getFilteredDishHandler(category) {
         
        props.setsingleMenu([])
        setActiveDish(category)
        let result = allMenus.filter((items)=> {
            
            return items.strCategory === category
            
        }).map((menuItems, id)=> {
            console.log("menu", menuItems)
            return(
                <CardDish menuItems = {menuItems} displayPopUp = {getPopUp} />
            )       
        })
      setFilteredState(result)
    }

    // SingleActiveDish  
   
   let singleActiveDish =  props.singleMenu.map((menuItems, index)=> {
      
        let maxItem = 3;
        if(index < maxItem) {
            return (   
     
                <CardDish menuItems = {menuItems} displayPopUp = {getPopUp} />
    
            )           
        }
    })
    // Get the Clicked Dish here
    let categoryMenu = filterMenu.map((items, index)=> {
       
        return(

            <li className= {items.strCategory === activeDish ? 'active' : ''} onClick={()=> {
                getFilteredDishHandler(items.strCategory)
            }}>{items.strCategory}

            </li>
            
        )
    })
   
 

    //Component's return Statement here 
    return(
        <>
       
        <div className='filtered-dishes'>
              <div className="container">
               
                    <div className='text-center'>
                        <h2>Categorized Dishes</h2>
                        {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis dicta, delectus quam eius saepe facilis cum.</p> */}
                    </div>
               <div className='filtered-flex-div'>

              
                    <div className='filtered-dishes-results' >
                        <ul className='category-list'>
                             {categoryMenu}
                        </ul>
                
                    </div>
                    <div >
                        <ul className='dish-items'>

                        {singleActiveDish}
             
                        {filteredDishes.length > 0 || singleActiveDish.length > 0 ? showTheseDishes : 
                            <div className='alert'>
                                <h3>Sorry no items found</h3>
                                <h4>Choose another dish</h4>
                            </div>}   
                                </ul>
                                {/* className='flex flex-wrap gap-30 padding resultant-dish-list' */}
                                {/* className='resultant-dish' */}

                                </div>
                                </div>
                <Pagination filteredDishes={filteredDishes} 
                            itemsPerPage={itemsPerPage}
                            currentPage = {currentPage}
                            setCurrentPage = {setCurrentPage}
                            />
                            {/* </div> */}
             
              </div>
        </div>
        </>
        
    )
}

export default FilteredDishes;