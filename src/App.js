import React, { useState } from 'react';
import './App.css';

import { Button } from '@material-ui/core'   // подключаем material ui


function App() {

  const [todos, setTodos] = useState(['first task', 'second task', 'third task'])
  const [input, setInput] = useState('');
  console.log(input)

  const addTodo = (event) => {
    event.preventDefault();       // отключаем перезагрузку страницы после отправки формы 
    setTodos([...todos, input])  // добавляем(не перезаписываем!) в существующий масив текущее состояние input
    setInput('')                  // очищаем input после добавление задачи
  }

  return (
    <div className="App">
      <p>TODO application was initialized!</p>

      <form>
        <input value={input} onChange={event => setInput(event.target.value)} />   {/* при любом изменении поля идет перезапись input */}
        <Button disabled = {!input} type='submit' onClick={addTodo} variant="contained" color="primary"> {/* по клику добавляем input в массив todos и отправляем форму */}
        Add Todo              {/* отключаем кнопку если input пустой */}
        </Button>         {/* material ui button */}
      </form>

      <ul>
        {
          todos.map(todo => (
            <li>{todo}</li>
          ))
        }

      </ul>
    </div>
  );
}

export default App;
