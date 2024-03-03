
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const MenuSearchWrapper= ({children}) => {

    const location = useLocation()
    const [showSearchComponent, setShowSearchComponent] = useState(false)

    useEffect(()=> {

       if(location.pathname === '/home' || '/search') {
        setShowSearchComponent(true)
       } else {
        setShowSearchComponent(false)
       }

    }, [location])

  return (
    <>
        {showSearchComponent && children}
    </>
  )
}

export default MenuSearchWrapper;