import { useEffect, useState } from 'react'

export function useError() {
  const [showError, setShowError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    console.log({ showError, errorMessage })
    setTimeout(() => {
      setShowError(false)
      setErrorMessage('')
    }, 5000)
  }, [errorMessage, showError])

  return {
    setShowError,
    showError,
    setErrorMessage,
    errorMessage,
  }
}
