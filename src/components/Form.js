import React from 'react'

function Form({ setInputText, todos, setTodos, inputText }) {

    // This function will be called via onChange, everytime we type in the input. 
    const inputTextHandler = (e) => {
        setInputText(e.target.value)        // We connected the input value to the Input text.
    }

    // This function will be called via onClick, everytime we click the button.
    const submitTodoHandler = (e) => {
        e.preventDefault()
        setTodos([...todos, {text: inputText, completed: false, id: Math.random() * 10}])
        setInputText('')
    }

  return (

    // We created a form.
    <form>
        <input onChange={inputTextHandler} 
                type="text" 
                value={inputText}
                />

        <button onClick={submitTodoHandler}
                type='submit'>Add</button>
        <div>
            {/* We created a drop down menu */}
            <select name="todos" id="">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>

    </form>
  )
}

export default Form