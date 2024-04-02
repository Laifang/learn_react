import "./App.css";
import TodoHeader from "./components/TodoHeader";
import TodoContent from "./components/TodoContent";
import TodoFooter from "./components/TodoFooter";
import { useState } from "react";

export default function App() {

  const deaultTodo = [{
    id: new Date(),
    text: "默认的todo",
    completed: false,
  },
  {
    id: new Date(),
    text: "默认的todo2",
    completed: false,
  }, {
    id: new Date(),
    text: "默认的todo3",
    completed: true,
  }];
  const [todos, setTodos] = useState([...deaultTodo]);
  const [filter, setFilter] = useState("")


  const addTodo = (text) => {
    const newTodo = {
      id: new Date(),
      text: text,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const filterTodo = () => {
    switch (filter) {
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    };
  }

  return (
    <>
      <h1 style={{ textAlign: "center" }} >React TodoList</h1> {/*H1居中对齐*/}
      <div className="todo-container">
        <TodoHeader addTodo={addTodo} />
        <TodoContent todos={filterTodo(todos)} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
        <TodoFooter setFilter={setFilter} />
      </div>
    </>
  );
}


