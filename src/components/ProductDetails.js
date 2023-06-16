import React from 'react'
import { useState, useEffect } from "react";
import "./productDetails.css"
import {useParams} from "react-router-dom"
import axios from "axios"
import { data } from './Data';
import { PanoramaFishEyeTwoTone } from '@mui/icons-material';

function ProductDetails({data,setData}) {
  const baseUrl = 'http://localhost:3000/students/'
 
  const [pData,setPdata]=useState()

  const param = new useParams()
  console.log(PanoramaFishEyeTwoTone)

  const getDataperId = async () => {
    const { data } = await axios.get(baseUrl+param.id);
    setData(data);
    console.log("demo")
    setPdata(data)
    console.log(data.title.longTitle)
  };
  console.log(pData)
  useEffect(()=>{
    getDataperId()
  },[])
  
  return (
    <div className='productWrapper'>
        <div className='leftWrapper'>
            {/* <img src={pData.url}/> */}
            <div className='buttonWrapper'>
                <button className='btn'>Add To Cart</button>
                <button className='btn'>Buy Now</button>
            </div>
        </div>
        <div className="rightWrapper">
          {/* <h1>{JSON.stringify(data.title["longTitle"])}</h1> */}
          {/* <h1>{pData.title.longTitle}</h1> */}
        </div>
        
    </div>
  )
}

export default ProductDetails