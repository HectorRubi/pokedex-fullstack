import axios from 'axios'
import { config } from './../utils/config'

export async function createUser(name: string) {
  const response = await axios.post(`${config.apiUrl}/user`, {
    name,
  })
  return response.data
}
