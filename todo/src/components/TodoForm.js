import React, {useState} from 'react'

const TodoForm = (props) => {

  const [newTodo, setNewTodo] = useState('')

  const handleSubmit = (e) => {
		e.preventDefault();
    props.addTodo(newTodo)
    setNewTodo('')
	};

	const handleChanges = (e) => {
		setNewTodo(e.target.value);
		console.log("todo", e.target.value);
  };
  
  return(
    <form className="todo_form" onSubmit={handleSubmit}>
    <input
      type="text"
      name="addTodo"
      placeholder="Add New Todo..."
      onChange={handleChanges}
      value={newTodo}></input>
    <button type="submit">
      Add
    </button>
  </form>
  )
}

export default TodoForm