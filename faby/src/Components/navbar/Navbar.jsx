import './navbar.css';
import {Link} from "react-router-dom";
import { FaWindowClose } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";
import { useState } from 'react';

 
const Navbar = () => {
  const [open,setopen]= useState(false);
  const handleclick =() =>setopen(!open);
  const closemenu =() =>setopen(false);
  return (
    <div className="navbar-head">
    <div className='navbar'>

        <h1>faby.</h1>
        <div onClick={handleclick} className="navbar-icons">
          {open ?<FaWindowClose /> :<IoMenuSharp />}
        </div>
        <ul className={open ?'nav-icon active':'nav-icon'}>
            <li><Link onClick={closemenu} to="/" className='nav-link'>Home</Link></li>
            <li><Link onClick={closemenu} to="Features"className='nav-link' >features</Link></li>
            <li><Link onClick={closemenu} to="clients" className='nav-link'>clients</Link></li>
            <li><Link onClick={closemenu} to="price" className='nav-link'>price</Link></li>
            <li><Link onClick={closemenu} to="about" className='nav-link'>about</Link></li>
            <li><Link onClick={closemenu} to="faq" className='nav-link'>faq</Link></li>
            <button className='navbar-btn'>get it now</button>
        </ul>
    </div>
    <div className="navbar-bottum">
        <h1>MailChimp Subscription Form</h1>
        <p>We have been working very hard to create the new version of our course. It comes with a lot of new features. Subscribe now!</p>
        <div className="navbar-box">
            <input type="text" placeholder='enter your email...' />
            <button className='nav-btn'>subscribe now</button>
        </div>
    </div>

    </div>
  )
}

export default Navbar