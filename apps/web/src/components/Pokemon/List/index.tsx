import { useState } from 'react'
import { Pagination, Spinner } from 'flowbite-react'
import { PokemonCard } from './../Card'
import { EmptyCard } from '../EmptyCard'
import { useFetchPokemons } from './../../../hooks/useFetchPokemons'

export function PokemonList({
  setRenderFavorites,
  setErrorMessage,
}: {
  setRenderFavorites: React.Dispatch<React.SetStateAction<symbol>>
  setErrorMessage: React.Dispatch<React.SetStateAction<string | null>>
}) {
  const [currentPage, setCurrentPage] = useState(1)
  const { allPokemons, showLoader, limit, offset } = useFetchPokemons(
    currentPage,
    setErrorMessage,
  )

  const onPageChange = (page: number) => {
    setCurrentPage(page)
    offset.current = (page - 1) * limit.current
  }

  return (
    <>
      {showLoader ? (
        <div className="text-center h-full">
          <Spinner aria-label="Loader" size="xl" />
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-10">
            {allPokemons.length === 0 && <EmptyCard />}
            {allPokemons.map((pokemon, index) => (
              <PokemonCard
                pokemon={pokemon}
                key={index}
                setRenderFavorites={setRenderFavorites}
                setErrorMessage={setErrorMessage}
              />
            ))}
          </div>
          <div className="flex justify-center">
            <Pagination
              currentPage={currentPage}
              onPageChange={onPageChange}
              showIcons
              totalPages={1281 / limit.current}
            />
          </div>
        </div>
      )}
    </>
  )
}
