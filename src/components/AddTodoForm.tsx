import { useState } from "react";

export default function AddTodoForm() {
  const [input, setInput] = useState("");

  function handleSubmit() {}

  return (
    <form className="flex">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="What needs to be done?"
        className="rounded-s-md grow border border-gray-400 p-2"
      />
      <button
        type="submit"
        className="w-16 rounded-e-md text-white bg-slate-900 hover:bg-slate-800"
      >
        Add
      </button>
    </form>
  );
}
