import { dummyData } from "./data/todos";
import TodoItem from "./components/TodoItem";
import { useState } from "react";
import AddTodoForm from "./components/AddTodoform";
const App = () => {
  const [todos, setTodos] = useState(dummyData);

  function setTodoCompleted(id: number, completed: boolean) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id == id ? { ...todo, completed } : todo))
    );
  }

  function addTodos(title: string) {
    setTodos((prevTodos) => [
      {
        id: prevTodos.length + 1,
        title,
        completed: false,
      },
      ...prevTodos,
    ]);
  }

  return (
    <main className="py-10 h-screen space-y-5 bg-gray-300">
      <h1 className="text-3xl font-bold text-center text-gray-900">
        Todo List
      </h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6">
        <AddTodoForm onSubmit={addTodos} />
        <TodoList todos={todos} onCompletedChange={setTodoCompleted} />
      </div>
    </main>
  );
};

export default App;
