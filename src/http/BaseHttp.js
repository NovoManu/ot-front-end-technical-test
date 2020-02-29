export class BaseHttp {
  baseUrl = 'https://demo6922545.mockable.io/ '
  fetch(url) {
    this.throwError()
  }
  throwError() {
    throw Error('Method is not implemented')
  }
}
