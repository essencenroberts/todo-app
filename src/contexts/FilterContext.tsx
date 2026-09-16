import { createContext, ReactNode, useContext, useState } from "react"

//this file is to track which todos the user wants to see

//create typescript type for filter
type Filter = "all" | "active" | "completed";


/// type for FilterContext what available
type FilterContextType = {
  filter: Filter;
  setFilter: (filter: Filter) => void;
};
// FilterContext undefined

const FilterContext = createContext<FilterContextType | undefined>(
  undefined
); 

// FilterProvider to store current filter
function FilterProvider({ children }: {children: ReactNode }) {
  const [filter, setFilter] = useState<Filter>("all"); // filter state to remember what the user selected

  // put filter and setFilter function into an object
  const value = {
    filter,
    setFilter,
  };

  //return provider
  return (
    <FilterContext.Provider
      value={value}
    >
      {children}
    </FilterContext.Provider>
  );

};

// create custom hook useFilter()
function useFilter() {
  const context = useContext(FilterContext);

// error
  if (!context) {
    throw new Error("useFilter must be used inside FilterProvider");
  }

  return context;
}
// export Provider
export { FilterProvider };

// export filter hook
export { useFilter };