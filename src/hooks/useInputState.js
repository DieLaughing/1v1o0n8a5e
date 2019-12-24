import { useState } from 'react'

export default (store, initialValue) => {
  const [value, setValue] = useState(JSON.parse(localStorage.getItem(store)) || initialValue)

  return {
    value,
    onChange: event => {
      setValue(event.target.value)
    },
    reset: () => setValue(initialValue)
  }
}
