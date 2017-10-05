import { Store } from 'redux'
import { IAppState } from '../reducers/index'
import { Toolbar } from '../ui/toolbar/index'
import ReplayTacticsContainer from './replay_tactics_container'
import StartBattleContainer from './start_battle_container'

export default class App {
  private app: PIXI.Application
  private store: Store<IAppState>
  private startBattleContainer: StartBattleContainer
  private replayTacticsContainer: ReplayTacticsContainer
  private toolbar: Toolbar

  constructor(app: PIXI.Application, store: Store<IAppState>) {
    this.app = app
    this.store = store
    this.startBattleContainer = new StartBattleContainer(app, store)
    this.replayTacticsContainer = new ReplayTacticsContainer(app, store)
    this.toolbar = new Toolbar(app)
    this.store.subscribe(this.handleUpdate.bind(this))
  }

  handleUpdate() {
    this.render()
  }

  render() {
    const state = this.store.getState()
    switch (state.href) {
      case '/battle/start':
        this.app.stage.removeChildren()
        this.app.stage.addChild(this.startBattleContainer.graphics)
        this.toolbar.render()
        break
      case '/replay/tactics':
        this.app.stage.removeChildren()
        this.app.stage.addChild(this.replayTacticsContainer.graphics)
        this.toolbar.render()
        break
    }
  }
}
