import React, { useReducer } from "react";
import { TodoReducer, initialState } from "./reducers/index";
import "./App.css";
import TodoItems from "./components/TodoItems";
import TodoForm from "./components/TodoForm";

function App() {
	const [todoState, dispatch] = useReducer(TodoReducer, initialState);
	console.log("state", todoState);

	const addTodo = (text) => {
		const todoText = {
			todo: text,
			completed: false,
			id: Date.now(),
		};
		dispatch({ type: "ADD_TODO", payload: todoText });
	};

	const completedTodo = (id) => {
		dispatch({ type: "COMPLETED_TODO", payload: id });
  };
  

	return (
		<>
			<div className="App">
				<h1>Todos App</h1>
				<TodoItems state={todoState} completedTodo={completedTodo} />
				<TodoForm addTodo={addTodo} />
				<button
					onClick={(e) => {
						e.preventDefault();
						dispatch({ type: "CLEAR_COMPLETED" });
					}}>
					Clear Completed
				</button>
			</div>
		</>
	);
}

export default App;
