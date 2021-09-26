import React from "react";
import './Navbar.css';
import logo from '../../assets/appleLogo.png'
function Navbar(Link)
{
    return <div className="Navbar">
        
        <div className="leftSide">
        <div className="logo">
        <img src={logo}/>
        </div>
        <div className="links">
           <a href="/">Home</a>
           {/* <a href="/view">View</a> */}
           {/* <Link to="/product">Product</Link> */}
           <a href="/contact">Contact</a>
          </div>
        </div>
        <div className="rightSide">
        <input type="search" placeholder="search"/>
        <button>Search</button>
        </div>
        
        </div>
        

}
export default Navbar;