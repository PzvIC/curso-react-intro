import { useState, useEffect } from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        const storedItem = localStorage.getItem(itemName);
        if (storedItem) {
          setItem(JSON.parse(storedItem));
        } else {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
        }
      } catch (err) {
        console.error("Error en localStorage:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }, 1000)
  }, [itemName]);

  const updateItem = (newItem) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    } catch (err) {
      setError(true);
    }
  };

  return { item, updateItem, loading, error };
}

export { useLocalStorage };

