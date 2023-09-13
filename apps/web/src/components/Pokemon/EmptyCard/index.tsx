import { Card } from 'flowbite-react'

export function EmptyCard() {
  return (
    <Card className="sm:col-span-2 md:col-span-3 lg:col-span-4 text-center">
      <p className="mb-5 text-base text-gray-500 dark:text-gray-400 sm:text-lg">
        Oops! It seems like there's no pokemons here yet.
        <br /> Why not be the first to add some pokemons?
      </p>
    </Card>
  )
}
