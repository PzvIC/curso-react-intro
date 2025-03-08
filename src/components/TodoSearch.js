import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"
import "../styles/TodoSearch.css"

function TodoSearch() {

  const { searchValue, setSearchValue } = useContext(TodoContext)

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

export { TodoSearch }