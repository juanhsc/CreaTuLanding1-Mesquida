import React from 'react';

const ItemListContainer = ({ mensaje }) => {
 const{data, setdata}=userstate{[]}
userEffect{()=>{
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
