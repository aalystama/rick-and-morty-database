import { createContext, useContext, useState } from "react";

const FilterStateContext = createContext();
const FilterDispatchContext = createContext();

function FilterProvider({ children }) {
  const [value, setValue] = useState(null);

  return (
    <FilterStateContext.Provider value={value}>
      <FilterDispatchContext.Provider value={setValue}>
        {children}
      </FilterDispatchContext.Provider>
    </FilterStateContext.Provider>
  );
}

function useFilterState() {
  const context = useContext(FilterStateContext);
  return context;
}

function useFilterDispatch() {
  const context = useContext(FilterDispatchContext);
  return context;
}

export { FilterProvider, useFilterState, useFilterDispatch };
