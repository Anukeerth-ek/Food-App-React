import React from "react";
import { Link } from "react-router-dom";
import MenuSearch from "./MenuSearch";
import { useState } from "react";
function Header() {

  const [navbar, setNavbar] = useState(true)

  const changeNavbar = ()=> {
      if(window.scrollY >= 650) 
        setNavbar(false)
         else 
           setNavbar(true)
  }

  window.addEventListener("scroll", changeNavbar)




     return (
      <>


   
          <nav className={navbar ? 'nav' : 'black-nav'}>
              <div className="app-title">
                <h3>Delicious Drive</h3>
              </div>
               <ul>
                    <li className="active">
                         <Link to="/home">Home</Link>
                    </li>
                    <li>
                         <Link to="/cart">Cart</Link>
                    </li>
                    <li>
                         <Link to="/checkout">Checkout</Link>
                    </li>
                    <li>
                         <Link to="/search">Cuisines</Link>
                    </li>
                    <li className="last-li">
                         <Link to="/">Login</Link>
                    </li>
               </ul>
             
          </nav>
          
          </>
     );
}

export default Header;
