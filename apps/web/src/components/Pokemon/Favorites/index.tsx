import { Spinner } from 'flowbite-react'
import { PokemonCard } from '../Card'
import { EmptyCard } from '../EmptyCard'
import { useFetchFavorites } from '../../../hooks/useFetchFavorites'

export function Favorites({
  renderFavorites,
  setRenderFavorites,
  setErrorMessage,
}: {
  renderFavorites: symbol
  setRenderFavorites: React.Dispatch<React.SetStateAction<symbol>>
  setErrorMessage: React.Dispatch<React.SetStateAction<string | null>>
}) {
  const { favorites, showLoader } = useFetchFavorites(
    renderFavorites,
    setErrorMessage,
  )

  return (
    <>
      {showLoader ? (
        <div className="text-center h-full">
          <Spinner aria-label="Loader" size="xl" />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-10">
          {favorites.length === 0 && <EmptyCard />}
          {favorites.map((pokemon, index) => (
            <PokemonCard
              pokemon={pokemon}
              key={index}
              isFavorite
              setRenderFavorites={setRenderFavorites}
              setErrorMessage={setErrorMessage}
            />
          ))}
        </div>
      )}
    </>
  )
}
