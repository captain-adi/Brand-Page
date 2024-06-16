import React from 'react'
import style from './Navbar.module.css'
function Navbar() {
  return (
    <div>
   <nav className={style.navbar}>
     <div><img src="/Image/brand_logo.png" alt="" /></div>
  
       <ul>
        <li href="#">MENU</li>
        <li href="#">LOCATION</li>
        <li href="#">ABOUT</li>
        <li href="#">CONTECT</li>
       </ul>

       <button>Login</button>
      
   </nav>
    </div>
  )
}

export default Navbar
