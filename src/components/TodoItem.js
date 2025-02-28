import "../styles/TodoItem.css";
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';

function TodoItem({ tarea, completed, icon: Icon }) {
    return (
      <li>
        {<CheckIcon className="icon checkicon" />}
        <h2>{tarea}</h2>
        {<XMarkIcon className="icon xmarkicon" />}
      </li>
    );
}

export { TodoItem };







