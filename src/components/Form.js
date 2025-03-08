import { useContext, useState } from "react";
import "../styles/Form.css";
import { TodoContext } from "../context/TodoContext";

function Form() {
    const { todoList, updateTodos, setToogleModal } = useContext(TodoContext);
    const [submitTodo, setSubmitTodo] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();

        // Trim input to prevent adding empty tasks
        if (submitTodo.trim() === "") return;

        const newTodo = [...todoList, { tarea: submitTodo.trim(), completed: false }];

        updateTodos(newTodo);
        setSubmitTodo("");
        setToogleModal(false);
    };

    const onCancel = (e) => {
        e.preventDefault();
        setToogleModal(false);
    };

    const onChange = (e) => {
        setSubmitTodo(e.target.value);
    };

    return (
        <form className="form-todo" onSubmit={onSubmit}>
            <label className="form-label">Add new task</label>
            <textarea
                className="form-text"
                placeholder="Write here"
                value={submitTodo}
                onChange={onChange}
            />
            <div className="form-button--box">
                <button type="submit" className="form-button form-button--accept">Add</button>
                <button className="form-button form-button--cancel" onClick={onCancel}>
                    Cancel
                </button>
            </div>
        </form>
    );
}

export { Form };
