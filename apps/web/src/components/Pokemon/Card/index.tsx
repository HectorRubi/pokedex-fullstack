import { useState } from 'react'
import { HiStar, HiEye } from 'react-icons/hi'
import { Card, Button, Tooltip } from 'flowbite-react'
import { PokemonInfo } from './../Info'
import { capitalize } from './../../../utils/capitalize'
import { Pokemon } from './../../../types/pokemon.api'

export function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
  const [openModal, setOpenModal] = useState<string | undefined>()

  return (
    <>
      <Card
        renderImage={() => (
          <img
            width={475}
            height={475}
            src={pokemon.image}
            className="block mx-auto"
          />
        )}
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
          {capitalize(pokemon.name)}
        </h5>
        <div className="flex justify-between">
          <Tooltip content="View info">
            <Button onClick={() => setOpenModal('default')}>
              <HiEye />
            </Button>
          </Tooltip>

          <Tooltip content="Add to Favorites">
            <Button color="warning">
              <HiStar />
            </Button>
          </Tooltip>
        </div>
      </Card>

      <PokemonInfo
        openModal={openModal}
        pokemon={pokemon}
        setOpenModal={setOpenModal}
      />
    </>
  )
}
