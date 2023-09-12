import { Card, Button } from 'flowbite-react'
import { Pokemon } from '../../../types/pokemon.api'
import { HiStar } from 'react-icons/hi'

export function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
  return (
    <Card
      renderImage={() => <img width={475} height={475} src={pokemon.image} />}
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
  )
}
