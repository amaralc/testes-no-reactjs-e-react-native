import { runSaga } from 'redux-saga'
import MockAdapter from 'axios-mock-adapter'
import api from '../../../services/api'
import { getTechs } from './sagas'
import { getTechsSuccess, getTechsFailure } from './actions'

const apiMock = new MockAdapter(api);

describe('Techs sagas', () => {
  it('should be able to fetch techs', async () => {
    const newTech = 'Node.js'
    const dispatch = jest.fn();

    apiMock.onGet('techs').reply(200, ['Node.js'])

    await runSaga({ dispatch }, getTechs).toPromise();
    expect(dispatch).toHaveBeenCalledWith(getTechsSuccess([newTech]))
  })

  it('should fail when api returns error', async () => {
    const dispatch = jest.fn();

    apiMock.onGet('techs').reply(500)

    await runSaga({ dispatch }, getTechs).toPromise();
    expect(dispatch).toHaveBeenCalledWith(getTechsFailure())
  })
})