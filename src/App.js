import { useState } from 'react';
import './App.css';

// Importing components below.
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>

      <Form setInputText={setInputText} 
            todos={todos} 
            setTodos={setTodos}
            inputText={inputText} />
            
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
