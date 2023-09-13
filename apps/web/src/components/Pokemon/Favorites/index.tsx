import { Spinner } from 'flowbite-react'
import { PokemonCard } from '../Card'
import { useFetchFavorites } from '../../../hooks/useFetchFavorites'

export function Favorites({
  renderFavorites,
  setRenderFavorites,
}: {
  renderFavorites: symbol
  setRenderFavorites: React.Dispatch<React.SetStateAction<symbol>>
}) {
  const { favorites, showLoader } = useFetchFavorites(renderFavorites)

  return (
    <>
      {showLoader ? (
        <div className="text-center h-full">
          <Spinner aria-label="Loader" size="xl" />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-10">
          {favorites.length === 0 && <p>There's no items here</p>}
          {favorites.map((pokemon, index) => (
            <PokemonCard
              pokemon={pokemon}
              key={index}
              isFavorite
              setRenderFavorites={setRenderFavorites}
            />
          ))}
        </div>
      )}
    </>
  )
}
