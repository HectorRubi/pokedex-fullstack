import axios from 'axios'
import { config } from './../config'

export class Pokeapi {
  static findAll(offset: number, limit: number) {
    return new Promise((resolve) => {
      axios
        .get(`${config.pokeapi}/pokemon`, {
          params: { offset, limit },
        })
        .then((response) => {
          resolve(response.data)
        })
        .catch((error) => {
          resolve({
            error,
            results: null,
          })
        })
    })
  }
}
