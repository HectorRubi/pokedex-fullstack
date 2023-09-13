import { useEffect, useRef, useState } from 'react'
import { getFavorites } from './../api/favorite'
import { Pokemon } from './../types/pokemon.api'
import { USER } from './../utils/constants'

export function useFetchFavorites(renderFavorites: symbol) {
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
          // Show Error
        })
        .finally(() => {
          setShowLoader(false)
        })
    }
  }, [renderFavorites])

  return {
    favorites,
    showLoader,
    limit,
    offset,
  }
}
