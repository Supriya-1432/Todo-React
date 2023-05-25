import React from 'react'
import Todo from './Todo'

export default function TodoList({todos, todotoggle}) {
  return (
    <div>
      {todos.map(todo => <Todo key={todo.id} todo={todo} todotoggle={todotoggle} />)}
    </div>
  )
}
