import { useEffect, useRef, useState } from 'react'
import { getFavorites } from './../api/favorite'
import { Pokemon } from './../types/pokemon.api'
import { USER } from './../utils/constants'

export function useFetchFavorites(
  renderFavorites: symbol,
  setErrorMessage: React.Dispatch<React.SetStateAction<string | null>>,
) {
  const [favorites, setFavorites] = useState<Pokemon[]>([])
  const [showLoader, setShowLoader] = useState(true)

  const limit = useRef(12)
  const offset = useRef(0)

  useEffect(() => {
    const user = localStorage.getItem(USER)
    if (user) {
      setShowLoader(true)
      getFavorites<Pokemon[]>(user)
        .then((response) => {
          setFavorites(response)
        })
        .catch(() => {
          setErrorMessage(
            'Something wrong happen fetching favorites, please try again later.',
          )
        })
        .finally(() => {
          setShowLoader(false)
        })
    }
  }, [renderFavorites, setErrorMessage])

  return {
    favorites,
    showLoader,
    limit,
    offset,
  }
}
