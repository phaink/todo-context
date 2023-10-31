import React, { createContext, useState } from "react";

import type { ITodo, TodoContextType } from "../@types/todo.d.ts";

export const TodoContext = createContext<TodoContextType | null>(null);

const TodoProvider: React.FC<React.ReactNode> = ({ children  }) => {
  const [todos, setTodos] = useState<ITodo[]>([
    {
      id: 1,
      title: "Driving Licence Theory",
      description: "Learn Driving Theory for B-KörKort from Trafiko.se",
      status: true,
    },
    {
      id: 2,
      title: "Job Search",
      description:
        "Search for relevant jobs, read the requirements, prepare application, and apply",
      status: true,
    },
    {
      id: 3,
      title: "Learn Programming",
      description: "Keep learning about topics in Programming",
      status: false,
    },
    {
      id: 4,
      title: "Continue Education",
      description: "Find relevant courses to increase chances of employment",
      status: true,
    },
    {
      id: 5,
      title: "Learn Swedish",
      description: "Goto SFI for Swedish language course",
      status: false,
    },
  ]);

  const saveTodo = (todo: ITodo) => {
    const newTodo: ITodo = {
      id: Math.random(),
      title: todo.title,
      description: todo.description,
      status: todo.status,
    };

    setTodos([...todos, newTodo]);
  };

  const updateTodo = (id: number): void => {
    todos.filter((item) => {
      if (item.id === id) {
        item.status = true;
        setTodos([...todos]);
      }
    });
  };

  return (
    <TodoContext.Provider
      value={{ todos, saveTodo, updateTodo }}
    >
        <div className="">
            { children }
        </div>
    </TodoContext.Provider>
  );
};

export default TodoProvider