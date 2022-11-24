/* eslint-disable react/prop-types */
import React from "react";

const TodoListItem = ({todo, index}) => {
    return <li key={index}>{todo}</li>
}

export default TodoListItem