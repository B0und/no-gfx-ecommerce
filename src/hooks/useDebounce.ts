import { useState, useEffect } from 'react'

const useDebounce = (value: any, timeout: number) => {
  const [state, setState] = useState(value)

  useEffect(() => {
    const timerID = setTimeout(() => setState(value), timeout)

    return () => clearTimeout(timerID)
  }, [value, timeout])

  return state
}

export default useDebounce
