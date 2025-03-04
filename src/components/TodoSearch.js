import "../styles/TodoSearch.css"

function TodoSearch ({searchValue, setSearchValue}) {
    return (
      <input 
        placeholder="Find TODOs"
        className="TodoSearch"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value)
          
        }}  
      />
    )
}

export {TodoSearch}