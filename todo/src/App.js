import React, { useReducer } from "react";
import { TodoReducer, initialState } from "./reducers/index";
import "./App.css";
import TodoItems from "./components/TodoItems";
import TodoForm from './components/TodoForm'

function App() {
  
	const [state, dispatch] = useReducer(TodoReducer, initialState);
	console.log('state',state);

  const addTodo = text => {
    const todoText = {
      todo: text,
      completed: false,
      id: Date.now()
    }
    dispatch({type: 'ADD_TODO', payload: todoText})
  }
  
	
	return (
		<>
			<div className="App">
				<h1>Todos</h1>
				<TodoForm addTodo={addTodo}/>
				<TodoItems state={state}/>
			</div>
		</>
	);
}

export default App;
