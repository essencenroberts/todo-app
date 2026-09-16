import { createContext, ReactNode, useState } from "react";


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
  editTodo:(id: number, newText: string) => void;
  clearCompleted:() => void;
} 

//create the TodoContext
const TodoContext = createContext<TodoContextType | undefined>(undefined);

// provider component w/ todo state
function TodoProvider({ children }: { children: ReactNode }) {
  //state to store list of todos 
  const [todos, setTodos] = useState<Todo[]>([]);

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
  }

  // clearCompleted function to delee everyt dod thats been completed
  const clearCompleted = () = {
    
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => !todo.completed)
    );
  };
  
  return (
  
  )


};