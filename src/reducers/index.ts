import { AllActions } from '../actions/index'
import * as actions from '../actions/index'

export interface IAppState {
  sample: string
}

const initialState: IAppState = {
  sample: ''
}


export default function reducer(state: IAppState = initialState, action: AllActions) {
  switch (action.type) {
    case actions.SAMPLE_ACTION_NAME:
      return 'updated'
    default:
      return state
  }
}
