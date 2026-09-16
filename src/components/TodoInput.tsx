import { useState } from "react";
import { useTodo } from "../contexts/TodoContext";
import { useTheme } from "../contexts/ThemeContext";



function TodoInput() {
  //create local state for text being typed
  const [text, setText] = useState("");

  // addTodo function from TodoContext
  const { addTodo } = useTodo();

  const { theme } = useTheme();

  return(
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <input 
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="What needs to be done?"
        className={
          theme === "light"
          ? "min-h-11 flex-1 border border-[#ebebeb] bg-white px-4 py-3 text-black outline-none placeholder:text-[#999999] focus:border-black"
          : "min-h-11 flex-1 border border-[#26263a] bg-[#010120] px-4 py-3 text-white outline-none placeholder:text-white focus:border-white"
        }
      />

      <button
        onClick={() => {
          // send text to the addTodo function
          addTodo(text);

          // clear input
          setText("");
        }}
        className="min-h-11 rounded-[4px] bg-black px-6 py-3 font-mono tet-sm font-medium uppercase tracking-[0.08px] text-white transition hover:bg-[#26263a]"
      >
        Create a new todo...
      </button>
    </div>
  )
}


export default TodoInput;