import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react'
import TechList from './index'

describe('TechList component', () => {
  it('should be able to add new tech', () => {
    const { getByText, getByTestId, getByLabelText } = render(<TechList />)

    const techListElement = getByTestId('tech-list');
    const techInputElement = getByLabelText('Tech')
    const techForm = getByTestId('tech-form')
    const techValue = 'Node.js'

    fireEvent.change(techInputElement, { target: { value: techValue } })
    fireEvent.submit(techForm)

    const addedTechElement = getByText(techValue)

    expect(techListElement).toContainElement(addedTechElement)
    expect(techInputElement).toHaveValue('')
  })
})