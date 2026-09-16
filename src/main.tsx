// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { TodoProvider } from './contexts/TodoContext.tsx'
import { StrictMode } from 'react'
import { FilterProvider } from './contexts/FilterContext.tsx'
import { ThemeProvider } from './contexts/ThemeContext.tsx'


createRoot(document.getElementById('root')!).render(
 
 <StrictMode>
  <TodoProvider>
    <FilterProvider>
      <ThemeProvider>
          <App />
      </ThemeProvider>
    </FilterProvider>
  </TodoProvider> 
 </StrictMode>,
 

);

//FilterProvider shares the current filter with the app
//the Todo Provider shares todo data and actions with app