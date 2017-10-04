import { Action } from 'redux'

export const SAMPLE_ACTION_NAME = 'sample/action'
export type SAMPLE_ACTION_TYPE = typeof SAMPLE_ACTION_NAME

interface SampleAction extends Action {
  type: SAMPLE_ACTION_TYPE
}

export const sampleAction = (): SampleAction => ({
  type: SAMPLE_ACTION_NAME
})

export type AllActions = SampleAction