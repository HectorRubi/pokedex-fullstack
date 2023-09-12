import { Modal, Progress } from 'flowbite-react'
import { capitalize } from './../../../utils/capitalize'
import { Pokemon, PokemonStat } from './../../../types/pokemon.api'

export function PokemonInfo({
  openModal,
  pokemon,
  setOpenModal,
}: {
  openModal: string | undefined
  pokemon: Pokemon
  setOpenModal: React.Dispatch<React.SetStateAction<string | undefined>>
}) {
  const stats: PokemonStat[] = JSON.parse(pokemon.stats) as PokemonStat[]

  return (
    <Modal
      show={openModal === 'default'}
      onClose={() => setOpenModal(undefined)}
    >
      <Modal.Header>{capitalize(pokemon.name)}</Modal.Header>
      <Modal.Body>
        <div>
          <img
            width={475}
            height={475}
            src={pokemon.image}
            className="mx-auto"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="rounded bg-sky-400 dark:bg-sky-600 p-5">
              <h3 className="text-black dark:text-white text-2xl">
                General Info
              </h3>
              <p className="text-black dark:text-white">
                <span className="font-bold">Height:</span>&nbsp;
                <span className="text-xl">{pokemon.height}'</span>
              </p>
              <p className="text-black dark:text-white">
                <span className="font-bold">Weight:</span>&nbsp;
                <span className="text-xl">{pokemon.weight} lbs</span>
              </p>
            </div>

            <div>
              {stats.map((stat, index) => (
                <div key={index}>
                  <h4 className="text-black dark:text-white text-lg">
                    {stat.stat.name}
                  </h4>
                  <Progress progress={stat.base_stat} size="lg" labelProgress />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}
