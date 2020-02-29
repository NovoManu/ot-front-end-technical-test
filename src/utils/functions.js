export const normalizeData = data => {
  return data.map(item => {
    const {
      id,
      target: { gene_info: { symbol, name }},
      association_score: { overall: score, datatypes }
    } = item
    return {
      id,
      symbol,
      name,
      score,
      datatypes
    }
  })
}
