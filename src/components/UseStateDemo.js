import  { useState } from 'react'

export default function UseStateDemo() {
    let num1 = 10;
    let num2 = 20;
    let sum = num1 + num2;

    //State => Value of any particular data at any particular time 
    // let [num3,setNum3] = useState("");
    let [myName , setMyName] = useState("Arjit Verma")
    let [todos,setTodos] = useState([
      "Go For Walk","Create Insta Reel", "Send Email",
    ])
   

    function deleteTodo(todoToDelete){
      console.log("Deleting Todo", todoToDelete)
      let updatedTodos = todos.filter((todo)=>{
          return todo !== todoToDelete
      })
      console.log(updatedTodos)
      setTodos(updatedTodos)
    }

    // map, filter , reduce => JS array methods . 
  return (
    <div>
      {/* <h3>Use Effect Demo and Usage</h3>
      <h2>User Name is {myName}</h2> */}
      {/* <button onClick={()=>{setMyName("Rahul!!")}}>Change Name</button> */}
      {todos.map((todo)=>{
        return <div key={todo}>
          <p>{todo}</p>
          <button onClick={()=>{deleteTodo(todo)}}>Delete Todo</button>
        </div>
      })}

    </div>
  )
}
