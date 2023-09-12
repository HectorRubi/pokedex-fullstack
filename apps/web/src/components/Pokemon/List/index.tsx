import { useState } from 'react'
import { Card, Button, Pagination, Spinner } from 'flowbite-react'
import { HiStar } from 'react-icons/hi'
import { useFetchPokemons } from './../../../hooks/useFetchPokemons'

export function PokemonList() {
  const [currentPage, setCurrentPage] = useState(1)
  const { allPokemons, showLoader, limit, offset } =
    useFetchPokemons(currentPage)

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
          <div className="grid grid-cols-4 gap-5 mb-10">
            {allPokemons.map((pokemon, index) => (
              <Card
                key={index}
                renderImage={() => (
                  <img width={475} height={475} src={pokemon.image} />
                )}
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                  {pokemon.name}
                </h5>
                <div className="flex justify-between">
                  <Button>View</Button>
                  <Button color="warning">
                    <HiStar />
                  </Button>
                </div>
              </Card>
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
