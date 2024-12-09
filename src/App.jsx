import React, { useState } from 'react'

export default function App() {

  const [counter,setCounter] = useState(0);
  const increase = () =>{
    setCounter(counter+1);
  }


  const [product,setProduct] = useState(false);
  const products = {
    name:'HP',
    price:'2000$',
    description:'This is laptop from hp.'    
  }
  

  const displayProduct = ()=>{  
    if(product){
      document.querySelector('.my-product').classList.add('d-none');
      setProduct(!product);
    }
    else{
      document.querySelector('.my-product').classList.remove('d-none');
      setProduct(!product);
    }
    
  }
  return (
    <div className='p-5'>
      <h1 className='py-2'>Counter : {counter}</h1>
      <button onClick={increase} className="btn btn-success my-2">Click</button>
      <br />
      <button onClick={displayProduct} className='btn btn-outline-primary'>{product?'Hide Product':'View Product'}</button>
      <div className='d-none my-product'>
        <h2>Product Details</h2>
        <p>name : {products.name}</p>
        <p>price : {products.price}</p>
        <p>description : {products.description}</p>
      </div>
    </div>
  )
}
