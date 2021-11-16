import { useState, useEffect } from 'react'

const getStorageValue = (key: string, defaultValue: string): string => {
  const saved = localStorage.getItem(key)
  const initial = saved ? JSON.parse(saved) : null
  return initial || defaultValue
}

const useLocalStorage = (key: string, defaultValue: string) => {
  const [value, setValue] = useState(() => getStorageValue(key, defaultValue))

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue] as const
}

export default useLocalStorage
