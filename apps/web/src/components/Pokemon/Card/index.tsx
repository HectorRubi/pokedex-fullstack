import { useState } from 'react'
import { HiStar } from 'react-icons/hi'
import { Card, Button } from 'flowbite-react'
import { PokemonInfo } from './../Info'
import { capitalize } from './../../../utils/capitalize'
import { Pokemon } from './../../../types/pokemon.api'

export function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
  const [openModal, setOpenModal] = useState<string | undefined>()

  return (
    <>
      <Card
        renderImage={() => <img width={475} height={475} src={pokemon.image} />}
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
          {capitalize(pokemon.name)}
        </h5>
        <div className="flex justify-between">
          <Button onClick={() => setOpenModal('default')}>View</Button>
          <Button color="warning">
            <HiStar />
          </Button>
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
