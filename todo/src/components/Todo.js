import React from "react";

const Todo = (props) => {
	console.log("props-item", props.item);
	return (
		<h3
			style={{ textDecoration: props.item.completed ? "line-through" : "" }}
			onClick={(e) => {
				e.preventDefault();
				props.completedTodo(props.item.id);
			}}>
			{props.item.todo}
		</h3>
	);
};

export default Todo;
