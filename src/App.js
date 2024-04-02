import "./App.css";

function App() {
  return (
    <>
      <div className="todo-container">
        <div className="todo-header">
          <input type="text" className="todo-input" placeholder="在这里输入todo内容，回车键确认" />
        </div>
        <div className="todo-content">
          <ul className="todo-list">
            <li className="todo-item"><input type="checkbox" /> 吃饭</li>
            <li className="todo-item"> <input type="checkbox" /> 睡觉</li>
            <li className="todo-item"><input type="checkbox" /> 打豆豆</li>
          </ul>
        </div>
        <div className="todo-footer">
          <label><input type="checkbox" /> 全部选中</label>
          <button className="todo-btn">删除已完成</button>
        </div>
      </div>
    </>
  );
}

export default App;
