import { dummyData } from "./data/todos";
import { useState } from "react";

//Components
import TodoItem from "./components/TodoItem";
import AddTodoForm from "./components/AddTodoForm";

const App = () => {
  const [todos, setTodos] = useState(dummyData);

  function setTodoCompleted(id: number, completed: boolean) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id == id ? { ...todo, completed } : todo))
    );
  }

  return (
    <main className="py-10 h-screen space-y-5">
      <h1 className="text-3xl font-bold text-center">My App</h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6">
        <AddTodoForm />
        <div className="space-y-2">
          {todos.map((todo) => (
            <p key={todo.id} className="text-lg">
              <TodoItem
                todo={todo}
                key={todo.id}
                onCompletedChange={setTodoCompleted}
              />
            </p>
          ))}
        </div>
      </div>
    </main>
  );
};

export default App;
