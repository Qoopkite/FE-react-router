import React from "react";
import { useNavigate } from "react-router-dom";
import {useState} from "react";


const Menu = () => {
  const navigate = useNavigate();
  const[brand,setBrand]=useState('');
  const handleBrand=event=>{
    setBrand(event.target.value)
  }


  return (
    <>
        <h1>Menu Page</h1>
        <div>
          <input type= {brand} onChange={handleBrand}/>
          <button onClick={()=>navigate(`/product/${brand}`)}>브랜드 페이지로 이동</button>
        </div>
    </>
  );
}

export default Menu;