import React, { useEffect } from 'react'
import { data } from './Data'
import "./product.css"
import { useNavigate } from 'react-router'
import axios from "axios"


function Product({data,setData}) {
    const baseUrl = 'http://localhost:3000/students/'
    const navigate=useNavigate()
    const getData = async () => {
        const { data } = await axios.get(baseUrl);
        setData(data);
        console.log(data)
    };
    useEffect(()=>{
        getData()
    },[])
    const handleClick=(i)=>{
        navigate(`products/${i.id}`)
    }
   

  return (
    <div className='cardWrapper'>
        {data.map((item)=>{
            return <div className='card' onClick={()=>{handleClick(item)}}>
                <img src={item.url}/>
                <h3>{item.title.shortTitle}</h3>
                <p>{item.price.mrp}</p>
            </div>

        })}
    </div>
  )
}

export default Product