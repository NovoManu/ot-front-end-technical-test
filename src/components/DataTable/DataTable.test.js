import React from 'react'
import { render } from '@testing-library/react'
import DataTable from './DataTable'

const mockData = [{
  id: 'ENSG00000146648-EFO_0001071',
  name: 'epidermal growth factor receptor',
  score: 1,
  symbol: 'EGFR'
}]

test('empty data table is rendered correctly', () => {
  const { getByText } = render(<DataTable data={[]} />)
  expect(getByText('Genes Associated with lung carcinoma')).toBeInTheDocument()
})

test('non empty data table is rendered correctly', () => {
  const { getByText } = render(<DataTable data={mockData} />)
  expect(getByText('ENSG00000146648-EFO_0001071')).toBeInTheDocument()
  expect(getByText('epidermal growth factor receptor')).toBeInTheDocument()
  expect(getByText('EGFR')).toBeInTheDocument()
})

