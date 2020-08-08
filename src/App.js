import React, { useState, useEffect } from 'react';
import './App.css';

import { Button, FormControl, Input, InputLabel } from '@material-ui/core'   // подключаем material ui
import Todo from './Todo';

import db from './firebase'
import firebase from 'firebase'

function App() {

  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('');

  // приложение слушает базу данных и при обновлении подгружает новые данн
  useEffect(() => {       //слушаем коллекцию todos принимаем все изменения
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot( snapshot => {  //сортируем по датам задачи  
      setTodos(snapshot.docs.map(doc => ({id: doc.id, task: doc.data().task})))   //разделяем документы => берем поле todo каждого отдельного документа и записываем в локальный массив
      console.log(snapshot.docs.map(doc => doc.data().task))
    })
  }, []);

  const addTodo = (event) => {
    event.preventDefault();       // отключаем перезагрузку страницы после отправки формы 
    
    db.collection("todos").add({   // добавляем задание на сервер
      task: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()  //добавляем к документу время публ. на сервере для сортировки
    })
    
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
            <Todo todo = {todo}/>
          ))
        }

      </ul>
    </div>
  );
}

export default App;
