import { useState } from "react";
export const NewSubTask = ({ Add }) => {
  const [enteredTask, setEnteredTask] = useState("");
  function handleChange(event) {
    setEnteredTask(event.target.value);
  }
  function handleClick() {
    if (enteredTask.trim() === "") {
      return;
    }
    setEnteredTask("");
    Add(enteredTask);
  }
  return (
    <div className="flex items-center gap-4">
      <input
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        type="text"
        value={enteredTask}
        onChange={handleChange}
      ></input>
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleClick}
      >
        ADD TASK
      </button>
    </div>
  );
};
