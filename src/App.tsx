import AddTodo from "./components/AddTodo";

function App() {
  return (
    <div className="bg-gray-800 h-screen w-full text-gray-300">
      <h1 className="text-center py-4 text-4xl">ToDo List</h1>
      <AddTodo />
    </div>
  );
}

export default App;
