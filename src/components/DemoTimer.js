import React, { useEffect, useState } from 'react'

export default function DemoTimer() {
  const [timer,setTimer] = useState(10);
  useEffect(()=>{
    if(timer > 0){
        setTimeout(()=>{
            setTimer(timer - 1)
        },1000)
    }
  },[timer])  

  return (
    <div>
      {timer}
    </div>
  )
}
