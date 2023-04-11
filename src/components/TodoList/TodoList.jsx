import React, {useState} from 'react';
import AddTodo from '../AddTodo/AddTodo';

export default function TodoList() {
  const [todos, setTodos] = useState([
    {id: '1', text: 'react 공부', status: 'active'},
    {id: '2', text: '테니스 레슨', status: 'active'},
  ]);

  const handleAdd = todo => {
    setTodos([...todos, todo]);
  };

  return (
    <section>
      <ul>
        {todos.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}
