import React, { useState, useEffect } from 'react';

function NotePage() {
  const [todo, setTodo] = useState([{ name: '' }]);
  let [inputValue, setInputValue] = useState('');
  let [newTodo, setNewTodo] = useState([{ name: '' }]);

  const inputChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => setNewTodo({ name: inputValue }), [inputValue]);

  const onSubmit = (e) => {
    e.preventDefault();
    setNewTodo({ name: inputValue });
    setTodo([...todo, newTodo]);
    setInputValue('');
  };

  const todsMap = todo.map((todoItem, i) => <p ket={i}>{todoItem.name}</p>);

  useEffect(() => {
    window.localStorage.getItem('todoInLocal', JSON.stringify(todo));
  }, [todo]);

  return (
    <div>
      name: <div>{todsMap}</div>
      <form onSubmit={onSubmit}>
        <input value={inputValue} onChange={inputChange}></input>
        <button>저장</button>
      </form>
    </div>
  );
}

export default NotePage;
