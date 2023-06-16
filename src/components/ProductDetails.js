import React from "react";
import { useState, useEffect } from "react";
import "./productDetails.css";
import { json, useParams } from "react-router-dom";
import axios from "axios";

function ProductDetails() {
  const baseUrl = "http://localhost:3000/students/";

  const [data, setData] = useState({});

  const { id } = new useParams();

  const getDataperId = async () => {
    const { data } = await axios.get(`${baseUrl}${id}`);
    setData(data);
  };

  useEffect(() => {
    getDataperId();
  }, []);

  return (
    <div className="productWrapper">
      <div className="leftWrapper">
        <img src={data.url} />
        <div className="buttonWrapper">
          <button className="btn">Add To Cart</button>
          <button className="btn">Buy Now</button>
        </div>
      </div>
      <div className="rightWrapper">
        <h1>{data.discount}</h1>
        <h1>{data?.title?.longTitle}</h1>
      </div>
    </div>
  );
}

export default ProductDetails;
