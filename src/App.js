import "./App.css";
import TodoHeader from "./components/TodoHeader";
import TodoContent from "./components/TodoContent";
import TodoFooter from "./components/TodoFooter";
import { useState } from "react";

export default function App() {

  const deaultTodo = [{
    //生成yyyy-mm-dd hh:mm:ss格式的时间戳作为id
    id: new Date().toISOString(),
    text: "默认的todo",
    completed: false,
  }];
  const [todos, setTodos] = useState([...deaultTodo]);
  const [filter, setFilter] = useState("")


  const addTodo = (text) => {
    const newTodo = {
      //生成yyyy-mm-dd hh:mm:ss格式的时间戳作为id
      id: new Date().toISOString(),
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


