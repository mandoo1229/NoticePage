import React, { useState, useEffect } from 'react';

function NotePage() {
  const [todo, setTodo] = useState([{ name: '' }]);
  const [inputValue, setInputValue] = useState('');
  const [newTodo, setNewTodo] = useState({ name: '' });

  const inputChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const storedTodo = JSON.parse(window.localStorage.getItem('name'));
    if (storedTodo) {
      setTodo(storedTodo);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('name', JSON.stringify(todo));
  }, [todo]);

  const onSubmit = (e) => {
    e.preventDefault();
    setNewTodo({ name: inputValue });
    setTodo([...todo, newTodo]);
    setInputValue('');
  };

  const todosMap = todo.map((todoItem, i) => <p key={i}>{todoItem.name}</p>);

  return (
    <div>
      name: <div>{todosMap}</div>
      <form onSubmit={onSubmit}>
        <input value={inputValue} onChange={inputChange}></input>
        <button>저장</button>
      </form>
    </div>
  );
}

export default NotePage;
