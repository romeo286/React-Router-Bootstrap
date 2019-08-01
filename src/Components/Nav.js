import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
    const navStyle ={
        color:'white'
    }
  return (
    <div className="App">
 <nav>
       <Link style={navStyle} to='/'>
       <h3>Welcome to Our Website</h3>
         </Link>
  
     <ul className="nav-links">
       
         <Link  style={navStyle}  to='/gallery'>
         <li>Gallery</li>
         </Link>
         <Link style={navStyle} to='/about'>
         <li>Contact</li>
         </Link>
     </ul>
 </nav>
    </div>
  );
}

export default Nav;
