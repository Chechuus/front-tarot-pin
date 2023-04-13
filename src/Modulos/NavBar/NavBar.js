//Cecilia Ceballos
import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
//import logo from '../Utilidades/Imagines/NavBar/logo.png'
import './NavBar.css'

export const NavBar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const [colorMenu, setColorMenu]=useState(false)
    const cambiaColor=()=>{
        if (window.scrollY>=90){
            setColorMenu(true)
        }else{
            setColorMenu(false)
        }
    }
    window.addEventListener("scroll", cambiaColor)

    const closeMenu = () => setClick(false)
    
  return (
    <section>
         <div className={colorMenu ? 'header header-bg':'header'}>
            <nav className='navbar'>
                {/* <a href='/' className='logo'>
                <img src={logo} alt='logo' /></a> */}
                <span className="tarotyastrologia">C-2    ~    Tarot y Astrologia</span>
                
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <a href='/' onClick={closeMenu}>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#bienvenido' onClick={closeMenu}>About</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#carrusel' onClick={closeMenu}>Product</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#servicios' onClick={closeMenu}>Services</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#formulario' onClick={closeMenu}>Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    </section>
  )
}
