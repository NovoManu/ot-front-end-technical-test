export class ChartDataHandler {
  constructor (data) {
    this._data = data
  }

  getChartData(type) {
    const types = {
      bar: () => this._getChartData(),
      radar: () => this._getChartData(),
    }
    try {
      return types[type]()
    } catch (e) {
      console.log('No chart type found')
      return []
    }
  }

  _getLabels() {
    return Object.keys(this._data)
  }

  _getChartData() {
    return {
      labels: this._getLabels(),
      datasets: [{
        backgroundColor: 'rgba(121, 182, 242, 0.5)',
        data: this._getLabels().map(key => this._data[key])
      }]
    }
  }
}
