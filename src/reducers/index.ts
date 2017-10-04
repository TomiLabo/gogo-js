import { AllActions } from '../actions/index'
import * as actions from '../actions/index'

export interface IAppState {
  href: string
}

export const initialState: IAppState = {
  href: '/battle/start',
}

export default function reducer(state: IAppState = initialState, action: AllActions) {
  switch (action.type) {
    case actions.CHANGE_LAYER_N:
      state.href = action.href
      return state
    default:
      return state
  }
}
