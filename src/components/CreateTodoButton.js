import "../styles/CreateTodoButton.css"

function CreateTodoButton () {
    return (
      <button
        onClick={() => {
          console.log("Click Todo Button")
        }}
      >+</button>
    )
}

export {CreateTodoButton}