import { render } from '@testing-library/react'
import { useSelector } from 'react-redux'
import TechList from './index'

jest.mock('react-redux')

describe('TechList component', () => {
  it('should render tech list', () => {
    useSelector.mockImplementation(callback => callback({ techs: ['Node.js', 'ReactJS'] }))
    const { getByText, getByTestId, debug } = render(<TechList />)
    const techListElement = getByTestId('tech-list')
    const techValueElementNode = getByText('Node.js')
    const techValueElementReact = getByText('ReactJS')
    debug()

    expect(techListElement).toContainElement(techValueElementNode)
    expect(techListElement).toContainElement(techValueElementReact)
  })

})