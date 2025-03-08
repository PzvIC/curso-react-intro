import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import "../styles/TodoCounter.css";

function TodoCounter() {
    const { totalTodos, completedTodos, loading } = useContext(TodoContext);

    if (loading) {
        return <h1>Loading tasks...</h1>;  // Mensaje mientras carga
    }

    return (
        <h1>
            {totalTodos === 0 
                ? "You don't have any tasks registered"
                : totalTodos === completedTodos
                ? "You have completed all your TODOs!"
                : `You have completed ${completedTodos} of ${totalTodos} TODOs`
            }
        </h1>
    );
}

export { TodoCounter };

