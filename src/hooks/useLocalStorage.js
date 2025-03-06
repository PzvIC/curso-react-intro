import { useState, useEffect } from "react"

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = useState(initialValue)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    let parsedItem = []

    if (!localStorage.getItem(itemName)) {
      localStorage.setItem(itemName, JSON.stringify(initialValue))
    } else {
      parsedItem = JSON.parse(localStorage.getItem(itemName))
    }
  }, [])

  const updateItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }

  return {
    item,
    updateItem,
    loading,
    error
  }

}

export { useLocalStorage }