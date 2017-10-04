import { Store } from 'redux'
import { IAppState } from '../reducers/index'

export default class ReplayTacticsContainer {
  private app: PIXI.Application
  private store: Store<IAppState>

  constructor(app: PIXI.Application, store: Store<IAppState>) {
    this.app = app
    this.store = store
  }

  get graphics() {
    const graphics = new PIXI.Graphics()
    graphics.lineStyle(2, 0x449944, 1)
    graphics.beginFill(0x66ff66, 0.25)
    graphics.drawRoundedRect(150, 150, 300, 300, 15)
    graphics.endFill()
    return graphics
  }
}
