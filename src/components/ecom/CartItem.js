import React, { useContext } from 'react'
import AppContext from '../../context/AppContext/AppContext'

export default function CartItem({id,image,title,quantity}) {
    let {cartItems,setCartItems} = useContext(AppContext)

    function handleQuantityChange(e){
        console.log(e.target.value)
        //Update the quantity in the cart
        let updatedCartItems = cartItems.map((item)=>{  
            if(item.id === id){
                return {...item, quantity:e.target.value}
            }
            return item
        })
        setCartItems(updatedCartItems)
    }

    function handleRemoveFromCart(id){
        let updatedCartItems = cartItems.filter((item)=>item.id !== id)
        setCartItems(updatedCartItems)
    }

  return (
    <div className='flex gap-4 shadow-md p-4'>
      <article className='flex gap-4'>
        <img className='w-20 h-20 object-cover' src={image} alt={title} />
        <div>
            <h3>{title}</h3>
            {/* Quanlity should be a dropdown and allow user to increase or decrease the quantity
            and show default value as the quantity */}
            <input type="number" value={quantity} onChange={(e)=>handleQuantityChange(e,id)} className='w-10' />
            {/* <p>{quantity}</p> */}
            <button onClick={()=>handleRemoveFromCart(id)}>Remove</button>
        </div>
      </article>
    </div>
  )
}
