"use client";
import React from "react";
import { useState } from "react";

interface TodoFormProps {
    addTodo: (task: string) => void;
  }

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(value);
    setValue("")

  };
  return (
    <div>
      <form className="w-full mb-4" onSubmit={handleSubmit}>
        <input
          type="text"
          className="outline-none bg-indigo-900 border-2 border-purple-600 py-2 px-4 mt-4 mb-8 w-72 text-white placeholder-opacity-50"
          value={value}
          placeholder="What is the task today? "
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          type="submit"
          className="todo-btn bg-purple-600 text-white border-none py-2 px-3 cursor-pointer"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
