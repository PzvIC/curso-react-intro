import React, { useState } from "react"
import { TodoCounter } from './components/TodoCounter';
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoItem } from './components/TodoItem';
import { TodoList } from './components/TodoList';
import { TodoSearch } from './components/TodoSearch';

import "./styles/main.css";

let arrTodos = [
  { tarea: "tarea1", completed: false },
  { tarea: "tarea2", completed: true },
  { tarea: "tarea3", completed: false }
];

function App() {

  const [todoList, setTodoList] = useState(arrTodos)
  const [searchValue, setSearchValue] = useState('')

  const completedTodos = todoList.filter(todo => !!todo.completed).length

  const totalTodos = todoList.length 

  const filterTodos = todoList.filter(todo => todo.tarea.toLocaleLowerCase().includes((searchValue).toLocaleLowerCase()))
  
  const todoCheck = (tarea) => {
    const newTodos = [...todoList]
    const todoIndex = newTodos.findIndex(todo => (todo.tarea === tarea))
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed
    setTodoList(newTodos) 
  }

  const deleteTodo = (element) => {
    const newTodos = todoList.filter(todo => (todo !== element))
    setTodoList(newTodos)
  }

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
      />
      <TodoList>
        {filterTodos.map(todo => (
          <TodoItem
            key={todo.tarea} 
            tarea={todo.tarea} 
            completed={todo.completed}
            todoCheck={() => todoCheck(todo.tarea)}
            deleteTodo={() => deleteTodo(todo)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;

