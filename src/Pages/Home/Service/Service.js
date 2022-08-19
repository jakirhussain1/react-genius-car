import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';
const Service = ({service}) => {
    const {id,name,price,description,img} = service;
    const navigate = useNavigate()
    const handleBuyNow = (id)=>{
        navigate(`/service/${id}`)
    }   
    return (
        <div id='service' className='service'>
            <img src={img} alt="" />
            <p>Name: {name}</p>
            <p>Price: {price}</p>
            <p>{description}</p>
            <button onClick={()=>handleBuyNow(id)} className='btn btn-success'>Buy Now</button>
        </div>
    );
};

export default Service;