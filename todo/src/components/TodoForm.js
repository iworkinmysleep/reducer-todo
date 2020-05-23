import React, { useState } from "react";

const TodoForm = (props) => {
	const [value, setValue] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		props.addTodo(value);
		setValue("");
	};

	const handleChanges = (e) => {
		setValue(e.target.value);
	};
	

	return (
		<form className="todo_form" onSubmit={handleSubmit}>
			<input
				type="text"
				name="todo"
				placeholder="Add New Todo..."
				onChange={handleChanges}
				value={value}></input>
			<button type="submit">Add</button>
		</form>
	);
};

export default TodoForm;
