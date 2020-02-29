import React from 'react'
import { render, waitForElement } from '@testing-library/react'
import App from './App'

test('start app correctly', async () => {
  const { getByTitle, getByText } = render(<App />)
  expect(getByTitle('placeholder')).toBeInTheDocument()
  const table = await waitForElement(() => getByText('Genes Associated with lung carcinoma'))
  expect(table).toBeInTheDocument()
})
