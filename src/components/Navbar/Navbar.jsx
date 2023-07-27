import React, { useState} from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/rmlogo.png';
import './navbar.css';


const Menu = () => (
  <>
  <p><a href="#About">About</a></p>
  <p><a href="#Experience">Experience</a></p>
  <p><a href="#Portfolio">Portfolio</a></p>
  <p><a href="#Links">Links</a></p>
  </>
)
const Navbar = () => {
   const [activeSection, setActiveSection] = useState(null);
  const [toggleMenu ,setToggleMenu] = useState(false);
  {/* toggle menu- shows if were showing the menu */}
  {/* second allows us to change variable*/}
  return (
    <div className='navbar'>
      <div className='navbar-links'>
        <div className='navbar-links_logo'>
          <img src={logo} alt='logo'/>
        </div>
        <div className='navbar-links_container'>
          <Menu/>
        </div>
        {/* mobile responsiveness */}
      </div>

      <div className = 'gpt3_navbar-menu'>
        {toggleMenu
        ? <RiCloseLine color= '#fff' size= {27} onClick = {()=> setToggleMenu(false)}/>
        : <RiMenu3Line color= '#fff' size= {27} onClick = {()=> setToggleMenu(true)}/>
        }
        {toggleMenu && (
          <div className='navbar-menu_container scale-up-center'>
              <Menu/>
          </div>
        )}

      </div>
      
    </div>
  )
}

export default Navbar