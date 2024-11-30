import { dummyData } from "./data/todos";
import TodoItem from "./components/TodoItem";

const App = () => {
  return (
    <main className="py-10 h-screen space-y-5">
      <h1 className="text-3xl font-bold text-center">Todo List</h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5">
        <div className="space-y-2">
          {dummyData.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default App;
