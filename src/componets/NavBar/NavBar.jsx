import React, { useState } from 'react'
import "./NavBar.css"
import {Link} from "react-router-dom"

import logo from "../../assets/logo.png"
import cart from "../../assets/cart_icon.png"

const NavBar = () => {

    const [active, setActive] = useState("shop")



  return (
    <>

      <div className='nav-bar'>


            <div className='logo'>
                <img src={logo} alt="" />
                <h1 className='logo-name'>Fashionista</h1>
            </div>



            <div className='nav-items'>
                <ul className='nav-items'>

                <li onClick={()=> setActive("shop")} className={` nav-link ${active==="shop"&&"active"} `}><Link className='nav-link' to={"/"}>Shop</Link></li>
                <li onClick={()=> setActive("men")} className={` nav-link ${active==="men"&&"active"} `}><Link className='nav-link' to={"/men"}>Men</Link></li>
                <li onClick={()=> setActive("women")} className={`nav-link ${active==="women"&&"active"}`} ><Link className='nav-link' to={"/women"}>Women</Link></li>
                <li onClick={()=> setActive("kids")} className={`nav-link ${active==="kids"&&"active"}`} ><Link className='nav-link' to={"/kids"}>Kids</Link></li>

                </ul>

            </div>

            <div className='cart-login'>

            <Link to={"/login"}><button onClick={()=> setActive("")} className='log-btn'>Login</button></Link>

               <Link to={"/cart"}> <img src={cart} alt="" /></Link>
                <div className='cart-count'>0</div>

            </div>
            </div>




{/*
    <div style={{

        display: `${mob&&"block"}`

    }} className='nav-bar mob-nav'>


        <div className='logo'>
            <img src={logo} alt="" />
            <h1 className='logo-name'>Fashionista</h1>
        </div>

        <div className='nav-items '>
            <ul className='nav-items mob-items'>

            <li onClick={()=> setActive("shop")} className={` nav-link ${active==="shop"&&"active"} `}>Shop</li>
            <li onClick={()=> setActive("men")} className={` nav-link ${active==="men"&&"active"} `}>Men</li>
            <li onClick={()=> setActive("women")} className={`nav-link ${active==="women"&&"active"}`} >Women</li>
            <li onClick={()=> setActive("kids")} className={`nav-link ${active==="kids"&&"active"}`} >Kids</li>

            </ul>

        </div>

        <div className='cart-login mob-cart'>

            <button className='log-btn'>Login</button>

            <div className='cart-con'>

                <img src={cart} alt="" />
                <div className='cart-count'>0</div>
            </div>

        </div>
    </div> */}

    </>
  )
}

export default NavBar
