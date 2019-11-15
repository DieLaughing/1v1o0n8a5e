import { useState, useEffect } from 'react'

const useStateWithLocalStorage = (localStorageKey) => {
  const [value, setValue] = useState(
    localStorage.getItem(localStorageKey) || ''
  )
  useEffect(() => {
    localStorage.setItem(localStorageKey, value)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]) 
  return [value, setValue]
}

export default useStateWithLocalStorage