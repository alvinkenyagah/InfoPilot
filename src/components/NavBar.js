import React from "react";
import "./navbar.css"
import { useState } from "react";
import { NavLink } from "react-router-dom";



function NavBar(){

  const [isNavExpanded, setIsNavExpanded] = useState(false)


return(

<>




<nav className="navigation">
    <img src="https://img.icons8.com/dusk/64/null/geography--v1.png"  className="brand-name"/>
    <button className="hamburger" 
     

      onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}


    >
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>

   <div   className="navigation-menu"> 
    <ul>
  <li><NavLink style={({isActive})=>(isActive ?{color:"red"}:{})} to="/">Home</NavLink></li>
  <li><NavLink style={({isActive})=>(isActive ?{color:"red"}:{})} to="/search">Search</NavLink></li>
  <li><NavLink style={({isActive})=>(isActive ?{color:"red"}:{})} to="/about">About</NavLink></li>
  <li><NavLink style={({isActive})=>(isActive ?{color:"red"}:{})} to="/contact">Contact</NavLink></li>
    </ul>
    
    </div>
  
    </nav>






</>




)








}


export default NavBar