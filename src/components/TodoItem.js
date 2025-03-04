import "../styles/TodoItem.css";
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';

function TodoItem({ tarea, completed, todoCheck, deleteTodo }) {
    return (
      <li>
        {<CheckIcon 
          className={`icon icon-check ${completed && "icon-check--completed"}`} 
          onClick={() => todoCheck()} 
        
        />}

        <h2 className={`task ${completed && "task-complete"}`}>{tarea}</h2>

        {<XMarkIcon 
          className="icon icon-xmark"
          onClick={() => deleteTodo()} 
        />}
      </li>
    );
}

export { TodoItem };







