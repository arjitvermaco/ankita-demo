import React, { useEffect, useState } from 'react'

export default function TodoApp() {
    //[Todos]
    const [todos,setTodos] = useState([]);
    const [inputValue,setInputValue] = useState('');
    
    //


    // useEffect(()=>{
    //     console.log(todos)
    // },[todos])
    function addTodo(e){
        e.preventDefault();
        let newTodo = {
            id: Date.now(),
            text:inputValue,
            completed:false
        }

        setTodos([newTodo,...todos])
        setInputValue("")
    }

    function toggleTodo(id){
        setTodos(todos.map((todo)=>
            todo.id === id ?{...todo, completed: !todo.completed}: todo
        ))
    }

    function deleteTodo(id){
        setTodos(todos.filter((todo)=> todo.id !== id))
    }
  return (
    <div>
      <h1>Todo App</h1>
      <form onSubmit={addTodo}>
        <input type='text'
        value={inputValue} 
        onChange={(e)=>{setInputValue(e.target.value)}}
        placeholder='Enter a new todo'/>
        <button type='submit'>Add Todo</button>
      </form>
      
      {todos.map((todo)=>{
        return (
            <div key={todo.id}>
            <span style={{textDecoration : todo.completed? 'line-through':'none'}}>{todo.text}</span>
            <button onClick={()=>{toggleTodo(todo.id)}}>Toggle</button>
            <button onClick={()=>{deleteTodo(todo.id)}}>Delete</button>

            </div>
        )
      })}
    </div>
  )
}
