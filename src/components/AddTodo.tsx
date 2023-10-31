import type { ITodo, TodoContextType } from "../@types/todo";

export default function AddTodo() {
  return (
    <form>
      <div className="p-2 flex flex-col gap-4">
        <div className="flex gap-2 items-center">
          <label
            className="block text-sm font-medium leading-6 text-gray-900 capitalize"
            htmlFor="title"
          >
            title
          </label>
          <input
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            type="text"
            id="title"
          />
        </div>
        <div className="flex gap-2  items-center">
          <label
            className="block text-sm font-medium leading-6 text-gray-900 capitalize"
            htmlFor="description"
          >
            description
          </label>
          <input
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            type="text"
            id="description"
          />
        </div>
      </div>
      <button
        type="submit"
        disabled={true}
        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Save
      </button>
    </form>
  );
}
