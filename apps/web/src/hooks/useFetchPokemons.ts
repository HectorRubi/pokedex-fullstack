import { useEffect, useRef, useState } from 'react'
import { getAllPokemons } from './../api/pokemon'
import { Pokemon } from './../types/pokemon.api'

export function useFetchPokemons(
  currentPage: number,
  setErrorMessage: React.Dispatch<React.SetStateAction<string | null>>,
) {
  const [allPokemons, setAllPokemons] = useState<Pokemon[]>([])
  const [showLoader, setShowLoader] = useState(true)

  const limit = useRef(12)
  const offset = useRef(0)

  useEffect(() => {
    setShowLoader(true)
    getAllPokemons<Pokemon[]>(offset.current, limit.current)
      .then((response) => {
        setAllPokemons(response)
      })
      .catch(() => {
        setErrorMessage(
          'Something wrong happen fetching pokemons, please try again later.',
        )
      })
      .finally(() => {
        setShowLoader(false)
      })
  }, [currentPage, setErrorMessage])

  return {
    allPokemons,
    showLoader,
    limit,
    offset,
  }
}
