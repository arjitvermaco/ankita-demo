import React, { useState } from 'react'
import AppContext from './AppContext';

export default function AppState({children}) {
  let [appName,setAppName] = useState("MyEcommerce App")  ;

  function logger(){
    console.log("Adding a console Log!!")
  }

  return (
    <AppContext.Provider value={{appName,setAppName,logger}}>
      {children}
    </AppContext.Provider>
  )
}
