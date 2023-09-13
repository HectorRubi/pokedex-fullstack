import { useEffect, useState } from 'react'

export function useError() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  useEffect(() => {
    setTimeout(() => {
      setErrorMessage(null)
    }, 5000)
  }, [errorMessage])

  return {
    setErrorMessage,
    errorMessage,
  }
}
