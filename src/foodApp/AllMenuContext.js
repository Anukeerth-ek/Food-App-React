import React, {useState, useEffect} from 'react'
import Loader from './Loader'


export const AllMenuContext = React.createContext()

export const AllMenus = (props)=> {

    let [menuState, menuStateFunction] = useState([])  
    let [loading, setLoading] = useState(true)
    // let [showHeader, setShowHeader] = useState(true)

// GET ALL THE MENUS HERE(8 of them)

    async function getMenuItems() {
        setLoading(true)
        const API_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?f=c'
        let response = await fetch(API_URL)
        let data = await response.json() 
        menuStateFunction(data.meals)     
        setLoading(false)
   }
    
   useEffect(()=> {

    getMenuItems()
    
  }, [])


   

    return(
        

            <AllMenuContext.Provider value= {menuState} >

             {!loading ?  props.children : <Loader/>}
           


           </AllMenuContext.Provider>
    )
}

