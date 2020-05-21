import React, { useState } from "react";
import { addTodoReducer, initialTodoState } from "../reducers/index";

const TodoItems = () => {
	const [todo, setTodo] = useState("test");
	const [newTodo, setNewTodo] = useState("");

	const handleSubmit = (e) => {
    e.preventDefault();
    setTodo({setNewTodo})
	};

	const handleChanges = (e) => {
    setNewTodo(e.target.value)
    console.log('todo', e.target.value)
  };

	return (
		<>
			<form className="todo_form">
				<input
					type="text"
					name="addTodo"
					placeholder="Add New Todo..."
					onChange={handleChanges}
					value={newTodo}></input>
				<button type="submit" onSubmit={handleSubmit}>
					Add
				</button>
			</form>
			<div className="todo_list">
				<ul>
					<li>{todo}</li>
				</ul>
			</div>
		</>
	);
};

export default TodoItems;
