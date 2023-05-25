import React,{ useState, useRef, useEffect } from 'react'
import TodoList from "./TodoList";
import {v4} from "uuid";

const LSK="tododata";

function App() {

  const [todos,setTodos] = useState(!localStorage.getItem(LSK)?[]:JSON.parse(localStorage.getItem(LSK)))
  const toDoNameRef= useRef()

  useEffect(()=>{
    localStorage.setItem(LSK,JSON.stringify(todos))
  },[todos])

  function toggleTodos(id){
    const copytodo= [...todos]
    const todo=copytodo.find(todo=> todo.id===id)
    todo.complete=!todo.complete
    setTodos(copytodo)
  }


  function handleAddToDo(){

    const name= toDoNameRef.current.value
    setTodos(prevTodos => {
      return [...prevTodos,{id:v4(),name:name,complete:false}]
    })
    toDoNameRef.current.value=null

  }

  function handleClearToDo(){
    const copytodo=todos.filter(todo=>!todo.complete)
    setTodos(copytodo)
  }



  return (
    <>
      <center >
      <h1>Todo Application</h1>
      <TodoList todos={todos} todotoggle={toggleTodos}/>
      <input ref={toDoNameRef} type="text"/><br/><br/>
      <button onClick={handleAddToDo}>Add todo</button><br/><br/>
      <button onClick={handleClearToDo}>Clear todo</button><br/><br/>
      Remaining left-<p>{todos.filter(todo=>!todo.complete).length}</p>
      </center>
    </>
  );
}

export default App;
