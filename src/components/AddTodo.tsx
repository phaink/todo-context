import type { ITodo, TodoContextType } from "../@types/todo";
import React, { useState, useContext, FormEvent } from "react";
import { TodoContext } from "../context/todoContext";



export default function AddTodo(): React.ReactNode {

  const { saveTodo } = useContext(TodoContext) as TodoContextType

  const [formData, setFormData] = useState<ITodo>({
    id: null,
    title: "",
    description: "",
    status: true
  })

  const todoNullCheck = (todo: ITodo): boolean => {
    if (todo.title === "" || todo.description === "") {
      return true
    }
    return false
  }

  const check = todoNullCheck(formData)
  console.log("check: ", check);

  const disable = check ? true : false

  const btnCommonClasses = "flex my-4 mx-2 w-1/3 self-end justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm capitalize "
  const btnClasses = btnCommonClasses + (disable ? "bg-gray-700 text-gray-500"
    : "bg-emerald-500 text-white  hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600")

  console.log("disable: ", disable);
  console.log("btnClasses: ", btnClasses);

  const handleChange = (e: FormEvent<HTMLInputElement>, formData: ITodo): void => {
    setFormData({ ...formData, [e.currentTarget.id]: e.currentTarget.value })
  }


  const handleFormSave = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    saveTodo(formData)
  }

  console.log("formData: ", formData);


  return (
    <form onSubmit={e => handleFormSave(e)} className="flex flex-col xl:w-1/3 md:w-full" >
      <fieldset className="p-2 flex flex-col gap-6">
        <div className="flex gap-2 items-center">
          <label
            className="block text-sm font-medium leading-6 text-gray-100 capitalize"
            htmlFor="title"
          >
            title
          </label>
          <input
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-100 bg-gray-700 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
            type="text"
            id="title"
            onChange={e => handleChange(e, formData)}
          />
        </div>
        <div className="flex gap-2  items-center">
          <label
            className="block text-sm font-medium leading-6 text-gray-100 capitalize"
            htmlFor="description"
          >
            description
          </label>
          <input
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-100 bg-gray-700 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
            type="text"
            id="description"
            onChange={e => handleChange(e, formData)}
          />
        </div>
      </fieldset>
      <button
        type="submit"
        disabled={disable}
        className={btnClasses}
      >
        save
      </button>
    </form>
  )
}

