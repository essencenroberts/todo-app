import { useFilter } from "../contexts/FilterContext";
import { useTheme } from "../contexts/ThemeContext";
import { useTodo } from "../contexts/TodoContext";
useTheme
import TodoItem from "./TodoItem";

function TodoList() {
  
  // get todo array from TodoContext
  const { todos, clearCompleted } = useTodo();

  // get current filter for FilterContext
  const { filter } = useFilter();

// theme 
  const { theme } = useTheme();

  // array with todos in filter
  const filteredTodos = todos.filter((todo) => {
    // if filter is all
    if (filter == "all") {
      return true;
    }
    // if filtr is active
    if (filter === "active") {
      return !todo.completed;
    }
    // if filter is completed
    if (filter === "completed") {
      return todo.completed;
    }
  });

  return (
    <section className="mt-12">
      <div className="flex flex-col gap-4 border-b border-[#ebebeb] pb-4 sm:flex-row sm:items-end sm:justify-between">
        <p className="font-mono text-[#999999]">What's Next</p>
        <h2 className="text-3xl font-medium font-mono">My Todo List</h2>
        <button onClick={clearCompleted}
          className={
            theme === "light" 
            ? "w-fit rounded-[4px] border border-[#ebebeb] bg-white px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.55px] text-black transition hover:border-black"
            : "w-fit rounded-[4px] border border-[#313641] bg-[#010120] px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.55px] text-white transition hover:border-white"
          }
        >Clear Completed</button>
        <ul
          className={
            theme === "light"
              ? "divide-y divide-[#ebebeb]"
              : "divide-y divide-[#26263a]"
          }
        >
          {/* loop through every todo and create a list item for each one */}
          {filteredTodos.map((todo) => (
            <TodoItem 
              key={todo.id}
              todo={todo}
            />
          ))}
        </ul>

        {filteredTodos.length === 0 && (
          <p className="py-10 text-center font-mono text-xs uppercase tracking-[0.55px] text-[#999999]">No tasks here.</p>
        )}
      </div>
    </section>
    
  )
}

export default TodoList;