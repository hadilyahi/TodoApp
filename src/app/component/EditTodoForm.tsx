"use client"
import React, { useState } from 'react';

interface EditTodoFormProps {
  editTodo: (task: string, id: string) => void;
  task: { id: string; task: string };
}

const EditTodoForm: React.FC<EditTodoFormProps> = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue("");
  };

  return (
    <div>
      <form className="w-full mb-4" onSubmit={handleSubmit}>
        <input
          type="text"
          className="outline-none bg-indigo-900 border-2 border-purple-600 py-2 px-4 mt-4 mb-8 w-72 text-white placeholder-opacity-50"
          value={value}
          placeholder="Update Task"
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          type="submit"
          className="todo-btn bg-purple-600 text-white border-none py-2 px-3 cursor-pointer"
        >
          Update Task
        </button>
      </form>
    </div>
  );
};

export default EditTodoForm;
