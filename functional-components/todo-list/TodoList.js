import React from 'react'
import { useState } from 'react';
import TodoListItem from './TodoListItem';

const TodoList = () => {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);

    const handleChange = (event) => {
        console.log(event);
        setTodo(event.target.value);
    }
    const handleSubmit = (event) => {
        // setTodos(todo);
        console.log(event)
        event.preventDefault();
    }

    return (
        <div>
            <ul>
                {todos.map((todo, index) => {
                    <TodoListItem key={index} todo={todo} />
                })}
            </ul>
            <form onSubmit={handleSubmit}>
                <input type="text" name="todo" id="todo" onChange={handleChange}/>
                <input type="submit" value="Add Todo"/>
            </form>
        </div>
    );
}

export default TodoList