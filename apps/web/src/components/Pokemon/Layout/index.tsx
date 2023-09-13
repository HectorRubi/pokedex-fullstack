import { useState } from 'react'
import { Tabs } from 'flowbite-react'
import { HiStar } from 'react-icons/hi'
import { MdDashboard } from 'react-icons/md'
import { PokemonList } from './../List'
import { Favorites } from './../Favorites'

export function PokemonLayout({
  setErrorMessage,
}: {
  setErrorMessage: React.Dispatch<React.SetStateAction<string | null>>
}) {
  const [renderFavorites, setRenderFavorites] = useState(Symbol())

  return (
    <Tabs.Group aria-label="Default tabs" style="default">
      <Tabs.Item active icon={MdDashboard} title="All">
        <PokemonList
          setRenderFavorites={setRenderFavorites}
          setErrorMessage={setErrorMessage}
        />
      </Tabs.Item>
      <Tabs.Item icon={HiStar} title="Favorites">
        <Favorites
          renderFavorites={renderFavorites}
          setRenderFavorites={setRenderFavorites}
          setErrorMessage={setErrorMessage}
        />
      </Tabs.Item>
    </Tabs.Group>
  )
}
