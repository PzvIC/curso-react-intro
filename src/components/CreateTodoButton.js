import { useContext } from "react"
import "../styles/CreateTodoButton.css"
import { TodoContext } from "../context/TodoContext"

function CreateTodoButton () {
  const { toogleModal, setToogleModal } = useContext(TodoContext)
    return (
      <button className="todo-button"
        onClick={() => {
          setToogleModal(!toogleModal)
        }}
      >+</button>
    )
}

export {CreateTodoButton}