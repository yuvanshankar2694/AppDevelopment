import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Button from '@mui/material/Button'
import { logout } from '../redux/userSlice'

import '../assets/css/Navbar.css'
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'

import { NavLink } from 'react-router-dom'

const NavbarHome = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const logoutHandler = () => {
    dispatch(logout())
    navigate('/')
  }

  const [showMediaIcons, setShowMediaIcons] = useState(false)
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <h2>
            <span>M</span>obile
            <span>C</span>are
          </h2>
        </div>
        <div
          className={
            showMediaIcons ? 'menu-link mobile-menu-link' : 'menu-link'
          }
        >
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About us</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact us</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services </NavLink>
            </li>
            <li>
              <NavLink to="/admin">Admin Login</NavLink>
            </li>
            <li>
              <div className="privacy">
                <NavLink to="/privacy">Privacy Policy</NavLink>
              </div>
            </li>
            <li>
              <div className="terms">
                <NavLink to="/conditons">Terms and Conditions</NavLink>
              </div>
            </li>
            <li>
              <div className="question">
                <NavLink to="/faq">FAQ</NavLink>
              </div>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://www.facebook.com/events/751226453438949"
                target="_thapa"
              >
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/mr.mobile_zone_service/#"
                target="_thapa"
              >
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=f881aq_IHaM"
                target="_thapa"
              >
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavbarHome