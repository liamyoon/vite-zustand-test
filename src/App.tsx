import React, {useState} from 'react';
import './App.css'
import {MainBox} from './styled.ts';
import useTodoStore from './store/useTodoStore';
import {activeEnter} from './util.ts';

function App() {
  const { todoList, addTodoItem, updateTodoItem } = useTodoStore();

  // state
  const [todoTitle, setTodoTitle] = useState('');

  const handleOnClickAddTodoItem = () => {
    if (!todoTitle) return;
    addTodoItem(todoTitle);
    setTodoTitle('');
  };

  const handleOnEnter = activeEnter(handleOnClickAddTodoItem);

  const handleOnClickComplete = (id: number, complete: boolean) => {
    updateTodoItem(id, complete);
  }

  return (
    <MainBox>
      <h1>TODO LIST</h1>
      <section className="todo-input-box">
        <input
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
          onKeyDown={handleOnEnter}
          maxLength={100}
        />
        <button onClick={handleOnClickAddTodoItem}>+</button>
      </section>
      <section className="todo-list-box">
        <ul>
          {todoList.map((item) => (
            <li key={item.id} title={item.title}>
              <label className={`${item.complete ? 'completed' : ''}`}>
                <input
                  type="checkbox"
                  checked={item.complete}
                  onClick={() => handleOnClickComplete(item.id, !item.complete)}
                />
                <p>{item.title}</p>
              </label>
              <button>x</button>
            </li>
          ))}
        </ul>
      </section>
    </MainBox>
  )
}

export default App
