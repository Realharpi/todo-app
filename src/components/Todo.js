import React from 'react'

// We are getting props from TodoList.
const Todo = ({ text }) => {
  return (
    <div>
        <li>{text}</li>

        <button>Done</button>

        <button>Remove</button>
    </div>
  )
}

export default Todo