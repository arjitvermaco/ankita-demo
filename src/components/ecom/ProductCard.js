import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({id,image, title, description, price,rating}) {
  return (
    <article className='border border-gray-300 rounded-md p-4 w-64'>
      <img src={image} alt={title} className='w-full h-48 object-contain' />
      <Link to={`/product/${id}`}><h3 className='text-lg font-bold'>{title}</h3></Link>
      {/* <p className='text-gray-500'>{description}</p> */}
      <p className='text-green-500 font-bold'>${price}</p>
      <p className='text-gray-500'>Rating: {rating.rate}</p>
    </article>
  )
}
