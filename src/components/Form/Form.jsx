import React from 'react';
import "./Form.css";
import { useState} from "react";
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const navigate = useNavigate();

    const [data, setData] = useState({
        image: "",
        name: "",
        location: "",
        description: ""
    });

    const handleClick = async (e)=>{
        e.preventDefault();
        const info = new FormData();
        info.append('name', data.name);
        info.append('location', data.location);
        info.append('description', data.description);
        info.append("image" , data.image)
       await fetch('http://localhost:7000/form', {method : 'POST', 
       body: info

     

      })
      navigate("/post")
    }
  return (
    <>    <div className= "data-capture-block">
        <form action="">
        <label htmlFor="input">Select image</label>
        <input type="file" onChange = {(e)=>{ setData({...data, image: e.target.files[0] } ) }} />
        <label htmlFor="input">name</label>
        <input type="text" placeholder ="name"  onChange = {(e)=>{ setData({...data, name: e.target.value } ) }} required/>
        <label htmlFor="input">location</label>
        <input type="text"  placeholder = "location" onChange = {(e)=>{ setData({...data, location: e.target.value } ) }} required />
        <label htmlFor="input">description</label>
        <input type="text" placeholder = "description" onChange = {(e)=>{ setData({...data, description: e.target.value } ) }}/>

        <button type='button' onClick = {handleClick}>submit</button>
        </form>


    </div>
    </>

  )
}

export default Form