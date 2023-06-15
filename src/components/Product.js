import React, { useEffect } from 'react'
import { data } from './Data'
import "./product.css"
import { useNavigate } from 'react-router'


function Product({setProduct}) {


   
    const navigate=useNavigate()
    const handleClick=(i)=>{
        navigate('/productdetails')
        setProduct(i)

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