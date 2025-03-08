import { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TodoContext = createContext()

function TodoProvider({ children }) {

    const { item: todoList, updateItem: updateTodos, loading, error } = useLocalStorage('TODOS_V1', [])

    const [searchValue, setSearchValue] = useState('')

    const [toogleModal, setToogleModal] = useState(false)

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
        <TodoContext.Provider
            value={{
                todoList,
                updateTodos,
                completedTodos,
                totalTodos,
                searchValue,
                setSearchValue,
                filterTodos,
                todoCheck,
                deleteTodo,
                loading,
                error,
                toogleModal,
                setToogleModal
            }}
        >
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }