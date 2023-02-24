import React from 'react'
import { useNavigate } from "react-router-dom";
import './Landing.css';
import logo from '../../images/logo.png'
import camera from '../../images/camera.png'

const Landing = () => {
    const navigate = useNavigate();

    function handleClick() {
        navigate('./form')
    }
  return (
    <div className='main-container'>
        <div className='main-top'>
        <img src={logo} alt="" />
        <h1> Instaclone</h1>
        <img className='camera' src={camera} alt="" onClick= {handleClick} />
        </div>

    </div>
  )
}

export default Landing;