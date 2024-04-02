import React from "react";

export default function TodoContent({ todos, deleteTodo, toggleTodo }) {
    return (
        <div className="todo-content">
            <ul className="todo-list">
                {todos.map((todo, index) => (
                    <li key={todo.id} className="todo-item">
                        <span style={{ fontWeight: "bold" }}>{index + 1}.&nbsp;</span><label style={{ textDecoration: todo.completed ? "line-through" : "none" }}>{todo.text}</label>
                        <button className="todo-item-button" onClick={() => toggleTodo(todo.id)}>切换</button>
                        <button className="todo-item-button" onClick={() => deleteTodo(todo.id)}>删除</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
