import { useState, useEffect } from "react";

function useLocalStorage<T>(key: string, initialValue: T) {
  //read from localStorage once on mount
  const [value, setValue] = useState<T>(() => {
    try {
      const stored = window.localStorage.getItem(key);
      return stored ? (JSON.parse(stored) as T) : initialValue;
    } catch (err) {
      console.error(`Error reading localStorage key "${key}":`, err);
      return initialValue;
    }
  });

  // Whenever value changes, write it back to localStorage
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.error(`Error writing localStorage key "${key}":`, err);
    }
  }, [key, value]);

  return [value, setValue] as const;
}

export default useLocalStorage;
