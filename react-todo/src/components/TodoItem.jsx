import React from "react";

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li
      className={`flex justify-between p-2 border-b ${
        todo.completed ? "line-through text-gray-500" : ""
      }`}
    >
      <span onClick={() => toggleTodo(todo.id)} className="cursor-pointer">
        {todo.text}
      </span>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="bg-red-500 text-white px-2"
      >
        X
      </button>
    </li>
  );
}

export default TodoItem;
