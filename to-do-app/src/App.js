import React, { useState } from 'react';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const addTodo = () => {
    if (currentTodo.trim()) {
      setTodos([...todos, currentTodo]);
      setCurrentTodo('');
    }
  };
  
  const handleEdit = (index) => {
    setCurrentTodo(todos[index]);
    setIsEditing(true);
  };
  
  const handleUpdate = (index) => {
    if (currentTodo.trim()) {
      const updatedTodos = [...todos];
      updatedTodos.splice(index, 1, currentTodo);
      setTodos(updatedTodos);
      setCurrentTodo('');
      setIsEditing(false);
    }
  };
  
  const handleDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };
  
  
  return (
    <div className="App">
      <h1>Todo List</h1>
      <input
        type="text"
        value={currentTodo}
        onChange={(e) => setCurrentTodo(e.target.value)}
      />
      {isEditing ? (
        <button onClick={handleUpdate}>Update</button>
      ) : (
        <button onClick={addTodo}>Add</button>
      )}
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
  // Other code...
};

export default App;
