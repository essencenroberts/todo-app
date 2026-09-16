# Context API Todo App

For this lab I built a functional Todo application using React, TypeScript and the Context API.

The goal of the prohect was to practice managing shared application state without passing props through multiple components. Instead of keeping all of the state inside App.tsx, I created separate Context providers for todos, filters, and themes.

The application allows users to:
- Add new todo items
- Mark todos as completed
- Edit existing todos
- Delete todos
- Clear all completed todos
- Filter todos by All, Active, or Completed
- Switch between light and dark mode
- Keep todos saved after refreshing the browswer

I also used Tailwind CSS to create a responsive interface with a clean technical dashboard design.

## Technologies Used
  - React
  - TypeScript
  - Vite
  - Tailwind CSS
  - React Context API
  - `useState`
  - `useEffect`
  - `useContext`
  - Browser `localStorage`


  ## What I Built

  ### TodoContext
 I created a `TodoContext` to manage the application's shared todo state.

 Each todo contain:
 id
 text
 completed

 The TodoContext provides the following actions:
  - addTodo()
  - toggleTodo()
  - deleteTodo()
  - editTodo()
  - clearCompleted()

The TodoProvider makes this information available to the componeents that need it.

  ### FilterContext
I created a separate `FilterContext` to manage which todos the user wants to see.

The available filters are:

all
active 
completed

The `FilterButtons` components uses `setFilter()` to change the selected filter.

`TodoList` then uses the selected filter to create a new list containing only the matching todos.

This helpe me understand types of shared state can be separated into their own contexts instead of putting everything into one large context.

  ### ThemeContext
I created a `ThemeContext` to manage the applicatin's visual theme.

The application supports:
light
dark

The `ThemeToggleButton` uses `toggleTheme()` to switch between the two themes.

Components use `useTheme()` to determine which styles should be displayed.


## How Context API Works in This Project

One of the main things I learned from this lab is how Context can help components share information.

## Challenges
One of my main challenges was understanding how the Provider connects to the components using the Context.

At one point, my `FilterButtons` component was trying to use `useFilter()`, but the appliation produced an error because `FilterProvider` had not been connected around the application.

This helped me understand that creating a Context is not enough. The component using the Context must be somwehere inside the corresponding Provider.

I also had to hink about which state belonged in Context and which state should remain local to a component.