import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';

const Navbar = () => {

return(


    
    <div>
    <header >
   <nav><div>
     <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Vanamo_Logo.png"/></div>
   <ul>
    <li>Home</li><li><Link to="/about">carFilter</Link></li><li>Gallery</li><li>contact us</li>
    </ul>
    </nav>
    </header>
  </div>
);
}

export default Navbar