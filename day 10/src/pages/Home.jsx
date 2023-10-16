import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../Components/Layout';
import "../assets/css/Home.css";
import NavbarHome from '../Components/NavbarHome';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <NavbarHome />
      </div>
      <a href="landing-page.html">Mobile Service Center</a>


      <div className="MainContainer">
        <div className="Left"><br />
          <div className="MainTitle">
            <h1 className='home-mobile'>
              Welcome To MobileCare
            </h1>
          </div>
          <div className="SubContent">
            <br></br>
            <h3 className='home-mobile'>
              Your one-stop solution for mobile device health and happiness.
            </h3>
          </div>
          <div className="Start">
            <button
              class="button-54"
              role="button"
              onClick={() => navigate('/Login')}
            >
              Connect us
            </button>
          </div>
        </div>
        <div className="Right">
          <br></br>
          <br></br>
          <img
            src="https://shorturl.at/rEJR9"
            width="500"
            height="500"
          alt="" ></img>
        </div>
      </div>
    </>
  )
}

export default Home;