// import { useState } from 'react';
import './App.css'
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import FilterButtons from './components/FilterButtons';
import ThemeToggleButton from './components/ThemeToggleButton';
import { useTheme } from './contexts/ThemeContext';

function App() {
 const { theme } = useTheme();

  return (
    <div
      className={
        theme === "light"
        ? "min-h-screen bg-white text-black"
        : "min-h-screen bg-gray-950 text-white"
      }
    >
      <main className='mx-auto max-w-6xl px-6 py-12'>
      <header>

          <p
            className={
              theme === "light"
              ? "font-mono text-[11px] font-medium uppercase tracking-[0.55px] text-[#999999]"
              : "font-mono text-[11px] font-medium uppercase tracking-[0.55px] text-[#999999]"
            }
          >TODO </p>
          <h1 className='mt-3 text-4xl font-medium tracking-[-0.8px]'>Keep track of what's next.</h1>
    
        
        <ThemeToggleButton />
      </header>

      <div 
        className='mt-8 h-2 w-full bg-gradient-to-r from-[#fc4c02] via-[#ef2cc1] to-[#bdbbff]          '
          ara-hidden="true"
      />
      <section className='mt-12'>
        <TodoInput />
        <FilterButtons />
        <TodoList />
      </section>  
      
      </main>
     
    </div>
  )
}

export default App;
