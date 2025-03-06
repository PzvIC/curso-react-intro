import { TodoCounter } from '../components/TodoCounter';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoItem } from '../components/TodoItem';
import { TodoList } from '../components/TodoList';
import { TodoSearch } from '../components/TodoSearch';
import "../styles/AppUI.css"

function AppUI({
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    filterTodos,
    todoCheck,
    deleteTodo,
    loading,
    error
}) {
    return (
        <>
            <TodoCounter completed={completedTodos} total={totalTodos} />
            <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            <TodoList>
                {loading && <p className='msg loading'>Loading TODOs...</p>}
                {error && <p className='msg error'>There has been an error on loading the TODOs</p>}
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
    )

}

export { AppUI }