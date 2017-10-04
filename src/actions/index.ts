import { Action } from 'redux'

export const CHANGE_LAYER_N = 'layer/change'
export type CHANGE_LAYER_T = typeof CHANGE_LAYER_N

interface IChangeLayer extends Action {
  type: CHANGE_LAYER_T
  href: string
}

export const changeLayer = (href: string): IChangeLayer => ({
  href,
  type: CHANGE_LAYER_N,
})

export type AllActions = IChangeLayer
