import React, {useEffect, useState} from 'react'

export default function UseEffectDemo() {

   const [myName,setMyName] = useState("Arjit")
   const [userAge,setUserAge] = useState(30)
    // There are 3 kinds of useEffect
    // 1. useEffect without dependency array
    //This useEffect with run everytime the component loads
    //or Any state of the component changes
    useEffect(()=>{
        console.log("1.This is the useEffect Without Dependency Array")
    })
    // 2. useEffect with empty dependency array
    //THis useEffect will only run when component is loaded.
    useEffect(()=>{
        console.log("2.This is a useEffect with Empty Dependency Array!!")
    },[])
    // 3. useEffect with dependency array
    //This useEffect will run when component loads 
    // and when myName state is changed
    useEffect(()=>{
        console.log("3.This is a useEffect with MyName in Dependency Array!!")
    },[myName])
  return (
    <div>
      <h1>UseEffect Demo</h1>
      <p>My name is : {myName}</p>
      <p>Age is : {userAge}</p>
      <button onClick={()=>{setMyName("Arjit Verma")}}>Change Name</button>
      <button onClick={()=>{setUserAge(40)}}>Change Age</button>
    </div>
  )
}
