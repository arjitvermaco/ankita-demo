import React, { useState } from 'react'
import AppContext from './AppContext';

export default function AppState({children}) {
  let [appName,setAppName] = useState("MyEcommerce App")  ;
  let [isCartOpen, setIsCartOpen] = useState(false);
  let [cartItems, setCartItems] = useState([])

  function logger(){
    console.log("Adding a console Log!!")
  }

  return (
    <AppContext.Provider value={{appName,setAppName,logger,isCartOpen,setIsCartOpen,cartItems,setCartItems}}>
      {children}
    </AppContext.Provider>
  )
}
