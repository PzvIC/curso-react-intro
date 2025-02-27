
import { TodoCounter } from './components/TodoCounter';
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoItem } from './components/TodoItem';
import { TodoList } from './components/TodoList';
import { TodoSearch } from './components/TodoSearch';

const arrTodos = [
  {tarea: "tarea1", completed: false}, {tarea: "tarea2", completed: true}, {tarea: "tarea3", completed: false}
]

function App() {
  return (
    <>

      <TodoCounter completed={3} total={10} />

      <TodoSearch/>

      <TodoList>

        {arrTodos.map(todo => (
          <TodoItem key={todo.tarea} tarea={todo.tarea} completed={todo.completed}/>
        ))}

      </TodoList>

      <CreateTodoButton/>

    </>
  );
}

export default App;
