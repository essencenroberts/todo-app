import { createContext, useState, useContext, useEffect } from "react";
import type { ReactNode} from "react";


//create Todo list type
type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

// add what the app needs from TodoContext
type TodoContextType = {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  editTodo: (id: number, newText: string) => void;
  clearCompleted:() => void;
} 

//create the TodoContext
const TodoContext = createContext<TodoContextType | undefined>(undefined);

// provider component w/ todo state
function TodoProvider({ children }: { children: ReactNode }) {
  //state to store list of todos and load from localstorage when app starts
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem("todos");

    if (savedTodos) {
      try {
      return JSON.parse(savedTodos);
    } catch {

      return [];
    }
  }
    return [];
  });

  // useffect save to localStorage using todos
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // function for adding a new Todo
  const addTodo = (text: string) => {
    // new object with unique ID , text, and completed
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
// add new todos
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  // toggleTodo function to change completed to not completed
  const toggleTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
        ? { ...todo, completed: !todo.completed }
        : todo
      )
    );
  };

  // deleteTodo function use .filter() 
  const deleteTodo = (id: number) => {
    
    setTodos((prevTodos) => 
      prevTodos.filter((todo) => todo.id !== id)
    );
  };

  // editTodo funtion to change text
  const editTodo = (id: number, newText: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => 
        todo.id === id
        ? { ...todo, text: newText }
        : todo
      )
    );
  };

  // clearCompleted function to delee everyt dod thats been completed
  const clearCompleted = () => {
    
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => !todo.completed)
    );
  };
  
  // out todo state and todo actions into one object for Context to share
  const value = {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    clearCompleted
  };
  return (
    //return the Provider so all components inside can access
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  
  );


}

// custom useTodo hook
function useTodo() {
  // get shared values/info from TodoContext
  const context = useContext(TodoContext);

  // use hook inside TodoProvider
  if (!context) {
    throw new Error("useTodo must be used inside TodoProvider");
  }

  return context;

}

export { TodoProvider }; // export Provider and connect to the App next
export { useTodo }; //export custom hook