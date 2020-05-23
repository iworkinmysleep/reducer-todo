import React from "react";
import Todo from "./Todo";

const TodoItems = (props) => {
	console.log('props', props)
	return (
		<div>
			{props.state.map((item) => {
				return <Todo item={item} key={item.id} />;
			})}
		</div>
	);
};

export default TodoItems;
