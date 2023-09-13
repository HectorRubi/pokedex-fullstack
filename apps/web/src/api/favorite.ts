import axios from 'axios'
import { config } from './../utils/config'

export async function getFavorites<R>(user: string) {
  const response = await axios.get<R>(`${config.apiUrl}/favorite`, {
    params: { user },
  })
  return response.data
}

export async function addFavorite<R>(userId: string, pokemonId: number) {
  const response = await axios.post<R>(`${config.apiUrl}/favorite`, {
    user: userId,
    pokemon: pokemonId,
  })
  return response.data
}

export async function removeFavorite<R>(userId: string, pokemonId: number) {
  const response = await axios.delete<R>(
    `${config.apiUrl}/favorite/${pokemonId}`,
    {
      params: { user: userId },
    },
  )
  return response.data
}
