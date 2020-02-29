import { BaseHttp } from './BaseHttp'

export class FetchHttp extends BaseHttp {
  async fetch (url) {
    try {
      const response = await fetch(`${this.baseUrl}${url}`)
      return await response.json()
    } catch (e) {
      console.log(e)
    }
  }
}
