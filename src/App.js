import React, { useState } from 'react';
import './App.css';

import { Button, FormControl, Input, InputLabel } from '@material-ui/core'   // подключаем material ui
import Todo from './Todo';


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
      <h1>TODO Application</h1>
      
      <form>
        <FormControl>
          <InputLabel>White a TODO</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />  {/* при любом изменении поля идет перезапись input */}
        </FormControl>
        
        <Button disabled={!input} type='submit' onClick={addTodo} variant="contained" color="primary"> {/* по клику добавляем input в массив todos и отправляем форму */}
          Add Todo              {/* отключаем кнопку если input пустой */}
        </Button>
      </form>
      
      <ul>
        {
          todos.map(todo => (
            <Todo text = {todo}/>
          ))
        }

      </ul>
    </div>
  );
}

export default App;
