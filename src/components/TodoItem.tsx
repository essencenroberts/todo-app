import { useState } from "react";
import { useTodo } from "../contexts/TodoContext";
import { useTheme } from "../contexts/ThemeContext";



// type for todo
type Todo = {
  id: number;
  text: string;
  completed: boolean;
}


// display one todo function/component
function TodoItem({ todo }: { todo: Todo }) {
  
  // get toggleTodo ++ delete function
  const { toggleTodo, deleteTodo, editTodo } = useTodo();

    // text state
  const [editText, setEditText] = useState(todo.text);
  // editing state
  const [isEditing, setIsEditing] = useState(false);

  const { theme } = useTheme();
  
  return (
    <li>
 
      <input 
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />

     {isEditing ? (
      <input 
        type="text"
        value={editText}
        onChange={(event) => setEditText(event.target.value)}
      />
     ) : (
     <span>{todo.text}</span>
     
     )}

     {isEditing ? (
      
      <button
        onClick={() => {
          editTodo(todo.id, editText); //save the edited text to Context

          setIsEditing(false); // stop edit mode 
        }}
        className="rounded-[4px] bg-black px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.55px] text-white transition hover:bg-[#26263a]"
      >
        Save
      </button>
     ) : (
      <button
        onClick={() => {
          setIsEditing(true); // editing
        }}
        className={
          theme === "light" 
          ? "rounded-[4px] border border-[#ebebeb] bg-white px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.55px] text-black transition hover:border-black" 
          : "rounded-[4px] border border-[#313641] bg-[#010120] px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.55px] text-white transition hover:border-white"  
        }
      >
        Edit
      </button>
     )}

        {/* button to delete a todo */}
      <button
        onClick={() => deleteTodo(todo.id)}
        className="rounded-[4px] px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.55px] yexy-[#999999] transition hover:text-black dark:hover:text-white"
      >
      Delete</button>
    </li>
  );
}

export default TodoItem;