import { dummyData } from "./data/todos";
import TodoItem from "./components/TodoItem";

const App = () => {
  return (
    <main className="py-10 h-screen">
      <h1 className="text-3xl font-bold text-center">My App</h1>
      <div className="max-w-lg mx-auto">
        <div className="space-y-2">
          {dummyData.map((todo) => (
            <p key={todo.id} className="text-lg">
              <TodoItem todo={todo} />
            </p>
          ))}
        </div>
      </div>
    </main>
  );
};

export default App;
