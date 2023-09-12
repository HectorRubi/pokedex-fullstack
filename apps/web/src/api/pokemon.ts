import axios from 'axios'
import { config } from './../utils/config'

export async function getAllPokemons<R>(offset: number, limit: number) {
  const response = await axios.get<R>(`${config.apiUrl}/pokemon`, {
    params: { offset, limit },
  })
  return response.data
}
