import React from 'react';
import './App.css'
import {MainBox} from './styled.ts';
import useTodoStore from './store/useTodoStore';

function App() {
  const { todoList, addTodoItem } = useTodoStore();

  const handleOnClickAddTodoItem = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  }

  return (
    <MainBox>
      <h1>TODO LIST</h1>
      <section className="todo-input-box">
        <input />
        <button onClick={handleOnClickAddTodoItem}>+</button>
      </section>
      <section>
        <ul>
          {todoList.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </section>
    </MainBox>
  )
}

export default App
