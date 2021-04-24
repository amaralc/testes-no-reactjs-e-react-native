import { render, fireEvent, cleanup } from '@testing-library/react'
import TechList from './index'

describe('TechList component', () => {
  beforeEach(() => {
    localStorage.clear()
  })
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

  it('should store techs in storage', () => {
    let { getByTestId, getByLabelText, getByText } = render(<TechList />) // Define methods using rendered dom
    let techListElement = getByTestId('tech-list');
    const techInputElement = getByLabelText('Tech')
    const techForm = getByTestId('tech-form')
    const techValue = 'Node.js'

    fireEvent.change(techInputElement, { target: { value: techValue } }) // Change input value
    fireEvent.submit(techForm)  // Submit form
    let addedTechElement = getByText(techValue) // Get added element

    cleanup(); // Clear dom

    ({ getByTestId, getByLabelText, getByText } = render(<TechList />)) // Redefine methods on new dom

    techListElement = getByTestId('tech-list') // Reinitialize variable
    addedTechElement = getByText(techValue) // Reinitialize variable

    expect(localStorage.setItem).toHaveBeenCalledWith('techs', JSON.stringify([techValue]))
    expect(techListElement).toContainElement(addedTechElement)
  })
})