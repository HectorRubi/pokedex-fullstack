import { useState } from 'react'
import { HiStar, HiEye, HiTrash } from 'react-icons/hi'
import { Card, Button, Tooltip } from 'flowbite-react'
import { PokemonInfo } from './../Info'
import { capitalize } from './../../../utils/capitalize'
import { Pokemon } from './../../../types/pokemon.api'
import { addFavorite, removeFavorite } from '../../../api/favorite'
import { USER } from '../../../utils/constants'

export function PokemonCard({
  pokemon,
  isFavorite = false,
  setRenderFavorites,
  setErrorMessage,
}: {
  pokemon: Pokemon
  isFavorite?: boolean
  setRenderFavorites: React.Dispatch<React.SetStateAction<symbol>>
  setErrorMessage: React.Dispatch<React.SetStateAction<string | null>>
}) {
  const [openModal, setOpenModal] = useState<string | undefined>()
  const [addLoader, setAddLoader] = useState<boolean>(false)
  const [deleteLoader, setDeleteLoader] = useState<boolean>(false)

  const onAddFavorite = (id: number) => {
    const user = localStorage.getItem(USER)
    if (user) {
      setAddLoader(true)
      addFavorite(user, id)
        .then(() => {
          setRenderFavorites(Symbol())
        })
        .catch((error) => {
          console.log(error)
          setErrorMessage(
            'Something wrong happen adding favorite, please try again later.',
          )
        })
        .finally(() => {
          setAddLoader(false)
        })
    }
  }

  const onDeleteFavorite = (id: number) => {
    const user = localStorage.getItem(USER)
    if (user) {
      setDeleteLoader(true)
      removeFavorite(user, id)
        .then(() => {
          setRenderFavorites(Symbol())
        })
        .catch((error) => {
          console.log(error)
          setErrorMessage(
            'Something wrong happen removing favorite, please try again later.',
          )
        })
        .finally(() => {
          setDeleteLoader(false)
        })
    }
  }

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

          {isFavorite ? (
            <Tooltip content="Delete from Favorites">
              <Button
                isProcessing={deleteLoader}
                disabled={deleteLoader}
                color="failure"
                onClick={() => onDeleteFavorite(pokemon.id)}
              >
                <HiTrash />
              </Button>
            </Tooltip>
          ) : (
            <Tooltip content="Add to Favorites">
              <Button
                isProcessing={addLoader}
                disabled={addLoader}
                color="warning"
                onClick={() => onAddFavorite(pokemon.id)}
              >
                <HiStar />
              </Button>
            </Tooltip>
          )}
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
