import reducer, { INITIAL_STATE } from './reducers'
import * as Techs from './actions'

describe('Techs reducer', () => {
  it('ADD_TECH', () => {
    const newTech = 'Node.js'
    const state = reducer(INITIAL_STATE, Techs.addTech(newTech))
    expect(state).toStrictEqual([newTech])
  })
})