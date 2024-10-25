import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/ecom/ProductCard'

export default function CategoryPage() {
  let {id} = useParams()
  let [products, setProducts] = useState([])

  useEffect(()=>{
    fetchProductsByCategory()
  },[id])

  async function fetchProductsByCategory(){
    const response = await fetch(`https://fakestoreapi.com/products/category/${id}`)
    const data = await response.json()
    setProducts(data)
  }
  return (
    <div className='flex flex-wrap gap-4 p-4 max-w-7xl mx-auto'>
      {/* <h1>Products Page for {id}</h1> */}
    {products.map((product)=>{
      return(
      <ProductCard key={product.id} {...product}/>
        // <div key={product.id}>{product.title}</div>
      )
    })}
</div>
  )
}
