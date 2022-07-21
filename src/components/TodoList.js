import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos}) => {

  return (
    <div>
        <ul>
            {todos.map(todo => (<Todo text={todo.text} />))}
        </ul>
    </div>
  )
}

export default TodoList