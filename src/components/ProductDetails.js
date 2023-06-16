import React from 'react'
import { useState, useEffect } from "react";
import "./productDetails.css"
import {useParams} from "react-router-dom"
import axios from "axios"
import { data } from './Data';

function ProductDetails({data,setData}) {
  const baseUrl = 'http://localhost:3000/students/'
 
  const id = new useParams()
  console.log(id)

  const getDataperId = async () => {
    const { data } = await axios.get(baseUrl+id.id);
    setData(data);
    console.log(data)
  };
  useEffect(()=>{
    getDataperId()
  },[])
  
  return (
    <div className='productWrapper'>
        <div className='leftWrapper'>
            <img src={data.url}/>
            <div className='buttonWrapper'>
                <button className='btn'>Add To Cart</button>
                <button className='btn'>Buy Now</button>
            </div>
        </div>
        <div>hello</div>
        
    </div>
  )
}

export default ProductDetails