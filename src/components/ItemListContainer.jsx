import React from 'react';
import {useEffect,useState} from 'react';
import itemList from "./itemList"
import {getProducts} from "../mock/AsyncMock"



const ItemListContainer = ({ mensaje }) => {
 const{data, setData}=useState{[]}
useEffect{()=>{
getProducts()
.them ((res)=>setData(res))
.catch ((error)=>console.error(error))
},[])



 console.log{data}
 
  return (
    <div>
<h1>{mensaje}</h1>
<itemList data={data}></itemList>

    </div>
  );
};

export default ItemListContainer;
