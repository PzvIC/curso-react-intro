import "../styles/TodoCounter.css";

function TodoCounter({ total, completed }) {
    return (
        <>
            {total === 0 && completed === 0 ? 
                (<h1>You don't have any tasks registered</h1>) 
            : total === completed ? 
                (<h1>You have completed all your TODOs!</h1>) 
            : 
                (<h1>You have completed <span>{completed}</span> of <span>{total}</span> TODOs</h1>)
            }
        </>
    )
}

export { TodoCounter };
