import { useEffect, useRef, useState } from 'react'
import { getAllPokemons } from './../api/pokemon'
import { Pokemon } from './../types/pokemon.api'

export function useFetchPokemons(currentPage: number) {
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
      .catch((error) => {
        console.log(error)
        // Show Error
      })
      .finally(() => {
        setShowLoader(false)
      })
  }, [currentPage])

  return {
    allPokemons,
    showLoader,
    limit,
    offset,
  }
}
