import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/ecom/ProductCard';
import CartComponent from '../../components/ecom/CartComponent';

export default function HomePage() {
  let [products, setProducts] = useState([])

  useEffect(()=>{
    fetchAllProducts()
  },[])
  
  async function fetchAllProducts (){
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json()
    setProducts(data)
    console.log(products)
  }

  return (
    <div className='flex flex-wrap gap-4 p-4 max-w-7xl mx-auto'>
      {/* <CartComponent/> */}
        {products.map((product)=>{
          return(
          <ProductCard key={product.id} {...product}/>
            // <div key={product.id}>{product.title}</div>
          )
        })}
    </div>
  )
}
