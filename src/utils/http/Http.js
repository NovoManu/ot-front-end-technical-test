import { BaseHttp } from './BaseHttp'
import { FetchHttp } from './FetchHttp'

export class Http extends BaseHttp {
  provider = new FetchHttp()
  async fetch(url) {
    return await this.provider.fetch(url)
  }
}
