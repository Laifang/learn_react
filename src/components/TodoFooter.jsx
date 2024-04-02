function TodoFooter({setFilter}) {
  return (
    <div className="todo-footer">
      <button onClick={() => setFilter('all')} >全部</button>
      <button onClick={() => setFilter('active')} >待办</button>
      <button onClick={() => setFilter('completed')} >已办</button>
    </div>
  );
}

export default TodoFooter;
