import { dummyData } from "./data/todos";

const App = () => {
  return (
    <main className="py-10 h-screen">
      <h1 className="text-3xl font-bold text-center">Todo List</h1>
      <div>
        <div>
          {dummyData.map((todo) => (
            <p key={todo.id}>{todo.title}</p>
          ))}
        </div>
      </div>
    </main>
  );
};

export default App;
