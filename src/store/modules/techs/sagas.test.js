import { runSaga } from 'redux-saga'
import { getTechs } from './sagas'
import { getTechsSucces } from './actions'

describe('Techs sagas', () => {
  it('should be able to fetch techs', async () => {
    const newTech = 'Node.js'
    const dispatch = jest.fn();
    await runSaga({ dispatch }, getTechs).toPromise();
    expect(dispatch).toHaveBeenCalledWith(getTechsSucces([newTech]))
  })
})