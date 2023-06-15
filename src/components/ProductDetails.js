import React from 'react'
import "./productDetails.css"

function ProductDetails({product}) {
    console.log(product)
  return (
    <div className='productWrapper'>
        <div className='leftWrapper'>
            <img src={product.url}/>
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