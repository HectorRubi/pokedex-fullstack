import axios from 'axios'
import { config } from './../config'

export class Pokeapi {
  static findAll<R>(offset: number, limit: number): Promise<R> | Promise<null> {
    return new Promise((resolve) => {
      axios
        .get(`${config.pokeapi}/pokemon`, {
          params: { offset, limit },
        })
        .then((response) => {
          resolve(response.data as R)
        })
        .catch(() => {
          resolve(null)
        })
    })
  }

  static findByUrl<R>(url: string): Promise<R> | Promise<null> {
    return new Promise((resolve) => {
      axios
        .get(url)
        .then((response) => {
          resolve(response.data as R)
        })
        .catch(() => {
          resolve(null)
        })
    })
  }
}
