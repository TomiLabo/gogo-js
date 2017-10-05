import { Store } from 'redux'
import StartBattleComponent from '../components/start_battle_components/index'
import { IAppState } from '../reducers/index'

export default class StartBattleContainer {
  private app: PIXI.Application
  private store: Store<IAppState>
  private _graphics: PIXI.Graphics
  private startBattleComponent: StartBattleComponent

  constructor(app: PIXI.Application, store: Store<IAppState>) {
    this.app = app
    this.store = store
    this._graphics = new PIXI.Graphics()
    this.startBattleComponent = new StartBattleComponent()
    this.initialRender()
  }

  get graphics() {
    return this._graphics
  }

  private initialRender() {
    this._graphics.addChild(this.startBattleComponent.graphics)
  }
}
