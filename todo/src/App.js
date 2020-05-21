import React from 'react';
import './App.css';
import TodoItems from './components/TodoItems';

function App() {
  return (
    <div className="App">
      <h1>Todos</h1>
      <TodoItems/>
    </div>
  );
}

export default App;
