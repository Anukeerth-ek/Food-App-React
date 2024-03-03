



import React, { useContext, useState } from 'react'
import { AllMenuContext } from './AllMenuContext'
import { DispatchContext } from '../context/AppProvider'
import ShowAlert from './ShowAlert'

function Popup({removePopup, currentDish, orderState, addToCartHandler, loginChecker}) {
  


// DISPLAY ALERT BOX WHEN USER NOT LOGGED IN
  const [displayAlertBox, setDisplayAlertBox] = useState(false)

    const displayAlert = ()=> {
        setDisplayAlertBox(true)
        
    }
// _____USECONTEXT______
  const allMenus = useContext(AllMenuContext)
  const dispatch = useContext(DispatchContext)
 
   let orderItems =  allMenus.filter((items)=> {
      return items.strMeal == currentDish
         
    }).map((items)=> {
   
      return(
        
      <div className='popup-content-data'>
    
        <div className='popup-header'>
          <h4>{items.strCategory} </h4>
          <img src={items.strMealThumb} />
        </div>
        <h2>{currentDish} </h2>
        <p>{items.strInstructions} </p>
        <ul className='dish-ingredients'>
          <li>{items.strIngredient1} </li>
          <li>{items.strIngredient2} </li>
          <li>{items.strIngredient3} </li>
          <li>{items.strIngredient4} </li>
        </ul>
        <i className="fa-solid fa-trash popup-close" onClick={removePopup}> </i>
               <button
                        onClick={loginChecker ? () => {
                         dispatch({ type: "add_to_cart", payload: { title: items.strMeal, img: items.strMealThumb } })
                        } : displayAlert} >
                        Add to cart
                 </button>
                                  
            
                          {displayAlertBox && <ShowAlert/>}
            
      </div>
      )
    })

   

    // ==================================
    let filteredOrderItem =  allMenus.filter((items)=> {
      return items.strMeal == orderState
         
    }).map((items)=> {
      return(
      <div className='popup-content-data'>
        <div className='popup-header'>
          <h4>{items.strCategory} </h4>
          <img src={items.strMealThumb} />
        </div>
        <h2>{orderState} </h2>
        <p>{items.strInstructions} </p>
        <ul className='dish-ingredients'>
          <li>{items.strIngredient1} </li>
          <li>{items.strIngredient2} </li>
          <li>{items.strIngredient3} </li>
          <li>{items.strIngredient4} </li>

          <i className="fa-solid fa-trash popup-close" onClick={removePopup}> </i>
            <button>Order now</button>
        </ul>
      </div>
      )
    })


    
    // ==================================


  return (
    <div className='popup'>
        <div className='popup-content'>
           
          {orderItems}
          {filteredOrderItem}
          
         
        </div>
    </div>
  )
}

export default Popup;








