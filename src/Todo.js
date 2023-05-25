import React from 'react'

export default function Todo({todo, todotoggle}) {

    function handleToggleToDo(){
        todotoggle(todo.id)
    }

  return (
    <div>
        <input onChange={handleToggleToDo} type="checkbox" checked={todo.complete} />
        {todo.name}
    </div>
  )
}
