import { Tabs } from 'flowbite-react'
import { HiStar } from 'react-icons/hi'
import { MdDashboard } from 'react-icons/md'
import { PokemonList } from './../List'

export function PokemonLayout() {
  return (
    <Tabs.Group aria-label="Default tabs" style="default">
      <Tabs.Item active icon={MdDashboard} title="All">
        <PokemonList />
      </Tabs.Item>
      <Tabs.Item icon={HiStar} title="Favorites"></Tabs.Item>
    </Tabs.Group>
  )
}
