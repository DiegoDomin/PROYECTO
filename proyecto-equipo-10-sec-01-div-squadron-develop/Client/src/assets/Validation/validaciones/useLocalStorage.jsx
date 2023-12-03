import { useState } from "react";

export function useLocalStorage(key, initialValue) {
  // Utiliza una función callback para obtener el valor inicial
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));  // Corregido 'setItem'
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}
