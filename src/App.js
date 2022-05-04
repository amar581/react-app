import React, { useState } from 'react';
import Todo from './Components/Todo';
// import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <Todo/>
      <header className="App-header">
       <p>React ToDo</p>
      </header>
    </div>
  );
}

export default App;
