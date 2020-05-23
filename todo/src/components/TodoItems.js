import React from "react";
import Todo from "./Todo";

const TodoItems = ({ state, completedTodo }) => {
	console.log("state", state);
	return (
		<div>
			{state.map((item) => {
				return <Todo item={item} key={item.id} completedTodo={completedTodo}/>;
			})}
		</div>
	);
};

export default TodoItems;
