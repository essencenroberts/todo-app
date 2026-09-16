import { useFilter } from "../contexts/FilterContext";
import { useTheme } from "../contexts/ThemeContext";




function FilterButtons() {
  // filter function
  const { filter, setFilter } = useFilter();

  const { theme } = useTheme();
  return (
    <div className="mt-8">
      
      <div
        className={ 
          theme === "light"
          ? "inline-flex gap-1 border border-[#ebebeb] bg-[#ebebeb] p-1"
          : "inline-flex gap-1 border border-[#26263a] bg-[#26263a] p-1"
        }
      >
        <button
        onClick={() => setFilter("all")}
        className={ 
          filter === "all"
          ? "rounded-[4px] bg-gray-500 px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.55px]"
          : "rounded-[4px] bg-white px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.55px]"
        }
        >All</button>

        <button
          onClick={() => setFilter("active")}
          className={ 
          filter === "active"
          ? "rounded-[4px] bg-gray-500 px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.55px]"
          : "rounded-[4px] bg-white px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.55px]"
        }
        >Active</button>

        <button
          onClick={() => setFilter("completed")}
          className={ 
          filter === "all"
          ? "rounded-[4px] bg-gray-500 px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.55px]"
          : "rounded-[4px] bg-white px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.55px]"
        }
        >Completed</button>
      </div>
      
{/* 
      <p>Current filter: {filter}</p> */}
    </div>
  )




}

export default FilterButtons;