"yse client";
import React from 'react';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Todo = {
  id: string;
  task: string;
  completed: boolean;
  isEditing: boolean;
};

type TodoProps = {
  task: Todo;
  toggleComplete: (id: string) => void;
  deleteTodo: (id: string) => void;
  editTodo: (id: string) => void;
};

const Todo: React.FC<TodoProps> = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="flex justify-between border-2 text-white px-4 py-2 shadow-sm rounded-md mb-2">
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
          className="mr-2 cursor-pointer bg-transparent"
        />
        <span className={task.completed ? 'line-through text-gray-500' : 'text-white'}>
          {task.task}
        </span>
      </div>
      <div className="flex gap-4 items-center ml-auto">
        <FontAwesomeIcon className="cursor-pointer" icon={faPenToSquare} onClick={() => editTodo(task.id)} />
        <FontAwesomeIcon className="cursor-pointer" icon={faTrash} onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  );
};

export default Todo;
