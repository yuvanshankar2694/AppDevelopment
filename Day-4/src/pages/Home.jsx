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
        <NavbarHome/>
    </div>
  
  <div className="MainContainer">
      <div className="Left">
        <div className="MainTitle">
           <h5>MOBILE SERVICE CENTER </h5>
        </div>
        <div className='SubContent'>
          <br>
            </br>
        <h4> <br></br>REPAIR.</h4>
        </div>
        <div className='Start'>
          <button class="button-54" role="button"  onClick={()=>navigate("/Login")}>JOIN US</button>
        </div>
      </div>
      <div className='Right'>
        <br></br>
        <br></br>
        <img src="https://media.istockphoto.com/id/1189142091/photo/technician-carefully-examines-the-integrity-of-the-internal-elements-of-the-smartphone-in-a.jpg?s=612x612&w=0&k=20&c=PBhncorT5inpsvf1gcljVx0AXYLE2e6A7WlH3tgwl-k=" width="800" height="500"></img>
      </div>
      
  </div>
  </>
  )
}

export default Home;