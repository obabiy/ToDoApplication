import React, { useState } from 'react';
import './App.css';

function App() {
  
  const [todos, setTodos] = useState(['first task', 'second task', 'third task'])
  const [input, setInput] = useState('');
  console.log(input)

  const addTodo = (event) => {
    setTodos([...todos, input])
  }

  return (
    <div className="App">
      <p>TODO application was initialized!</p>
      <input value = {input} onChange = { event => setInput(event.target.value) }/>   {/* при любом изменении поля идет перезапись input */}
      <button onClick = {addTodo}>Add Todo</button>

      <ul>
        {
          todos.map( todo => (
            <li>{todo}</li>
          ))
        }

      </ul>
    </div>
  );
}

export default App;
