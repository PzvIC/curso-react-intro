import React, { useState } from "react"
import { useLocalStorage } from "./hooks/useLocalStorage";
import { AppUI } from "./components/AppUI";
import "./styles/main.css";

function App() {

  const { item: todoList, updateItem: updateTodos, loading, error } = useLocalStorage('TODOS_V1', [])

  const [searchValue, setSearchValue] = useState('')

  const completedTodos = todoList.filter(todo => !!todo.completed).length

  const totalTodos = todoList.length

  const filterTodos = todoList.filter(todo => todo.tarea.toLocaleLowerCase().includes((searchValue).toLocaleLowerCase()))

  const todoCheck = (tarea) => {
    const newTodos = [...todoList]
    const todoIndex = newTodos.findIndex(todo => (todo.tarea === tarea))
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed
    updateTodos(newTodos)
  }

  const deleteTodo = (element) => {
    const newTodos = todoList.filter(todo => (todo !== element))
    updateTodos(newTodos)
  }

  return (
    <AppUI
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      filterTodos={filterTodos}
      todoCheck={todoCheck}
      deleteTodo={deleteTodo}
      loading={loading}
      error={error}
    />
  );
}

export default App;

