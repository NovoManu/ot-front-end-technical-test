import React from 'react'
import { render, fireEvent, waitForElement } from '@testing-library/react'
import DataTableRow from './DataTableRow'

const mockData = {
  id: 'ENSG00000146648-EFO_0001071',
  name: 'epidermal growth factor receptor',
  score: 1,
  symbol: 'EGFR',
  datatypes: {
    affected_pathway: 1,
    animal_model: 1,
    genetic_association: 1,
    literature: 1,
    rna_expectation: 1,
    somatic_mutation: 1
  }
}

test('data row is rendered correctly', async () => {
  const { getByText, getByTitle, getByRole } = render(<DataTableRow gene={mockData} chartType="bar" />)
  expect(getByText('ENSG00000146648-EFO_0001071')).toBeInTheDocument()
  expect(getByText('epidermal growth factor receptor')).toBeInTheDocument()
  expect(getByText('EGFR')).toBeInTheDocument()
  fireEvent.click(getByTitle('chartSwitcher'))
  const chart = await waitForElement(() => document.getElementsByTagName('canvas'))
  expect(chart[0]).toBeInTheDocument()
})

