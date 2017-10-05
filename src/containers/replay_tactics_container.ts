import { Store } from 'redux'
import { IAppState } from '../reducers/index'

export default class ReplayTacticsContainer {
  private app: PIXI.Application
  private store: Store<IAppState>
  private _graphics: PIXI.Graphics

  constructor(app: PIXI.Application, store: Store<IAppState>) {
    this.app = app
    this.store = store
    this._graphics = new PIXI.Graphics()
    this.initalRender()
  }

  get graphics() {
    return this._graphics
  }

  private initalRender() {
    this._graphics.lineStyle(2, 0x449944, 1)
    this._graphics.beginFill(0x66ff66, 0.25)
    this._graphics.drawRoundedRect(150, 150, 300, 300, 15)
    this._graphics.endFill()
  }
}
