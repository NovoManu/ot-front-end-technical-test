import React from 'react'
import { render } from '@testing-library/react'
import DataLoadingPlaceholder from './DataLoadingPlaceholder'

test('render loading placeholder', () => {
  const { getByTitle } = render(<DataLoadingPlaceholder />)
  expect(getByTitle('placeholder')).toBeInTheDocument()
})
