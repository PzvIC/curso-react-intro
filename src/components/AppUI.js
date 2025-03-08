import { useContext } from 'react';
import { TodoCounter } from '../components/TodoCounter';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoItem } from '../components/TodoItem';
import { TodoList } from '../components/TodoList';
import { TodoSearch } from '../components/TodoSearch';
import { TodosLoading } from './TodosLoading';
import { TodosError } from './TodosError';
import { TodoContext } from '../context/TodoContext';
import { Modal } from './Modal';
import { Form } from './Form';

import "../styles/AppUI.css"

function AppUI() {

    const {
        filterTodos,
        todoCheck,
        deleteTodo,
        loading,
        error,
        toogleModal,
    } = useContext(TodoContext)

    return (
        <>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {loading && <TodosLoading />}
                {error && <TodosError />}
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
            {toogleModal && (
                <Modal>
                    <Form/>
                </Modal>
            )}
        </>
    )

}

export { AppUI }