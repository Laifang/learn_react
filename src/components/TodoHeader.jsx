import React, { useState } from 'react'

export default function TodoHeader({ addTodo }) {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim() === '') {
      return
    }
    addTodo(inputValue)
    setInputValue('')
  }
  return (
    <div className="todo-header">
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} className="todo-input" placeholder="在这里输入todo内容，回车键确认" />
        <button className="todo-btn">添加</button>
      </form>
    </div>
  )
}
