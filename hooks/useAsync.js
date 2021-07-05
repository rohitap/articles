import { useState } from 'react'

const useAsyncFn = (fn) => {
  const [state, setState] = useState({
    isLoading: false,
    err: null,
    res: null
  })

  const asyncFunc = async (...args) => {
    setState({ isLoading: true, err: null, res: null })
    try {
      const { data } = await fn(...args)
      setState({ ...state, isLoading: false, res: data })
    } catch (err) {
      setState({ ...state, isLoading: false, err })
    }
  }

  return { ...state, asyncFunc }
}

export default useAsyncFn