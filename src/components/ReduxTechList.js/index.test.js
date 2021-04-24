import { render, fireEvent } from '@testing-library/react'
import { useSelector, useDispatch } from 'react-redux'
import TechList from './index'
import { addTech } from '../../store/modules/techs/actions'

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

  it('should be able to add new tech', () => {
    const dispatch = jest.fn()
    useDispatch.mockReturnValue(dispatch);

    const { getByTestId, getByLabelText } = render(<TechList />)
    const techForm = getByTestId('tech-form')
    const techInputElement = getByLabelText('Tech')
    const newTech = 'Node.js'


    fireEvent.change(techInputElement, { target: { value: newTech } })
    fireEvent.submit(techForm)

    console.log(dispatch.mock.calls)

    expect(dispatch).toHaveBeenCalledWith(addTech(newTech))
  })

})