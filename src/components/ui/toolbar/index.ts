import Rect from '../../../models/rect'
import store from '../../../stores/index'
import { Button } from './button'

export class Toolbar {
  private app: PIXI.Application
  private _startBattleButton: Button
  private _replayTacticsButton: Button
  private _generateAspectButton: Button
  private _confirmHandButton: Button

  constructor(app: PIXI.Application) {
    this.app = app
    this._startBattleButton = new Button(
      new Rect(10, 10, 90, 30),
      0xffffff,
      0x222222,
      '対戦実行',
      '/battle/start',
      store.dispatch,
    )
    this._replayTacticsButton = new Button(
      new Rect(110, 10, 90, 30),
      0xffffff,
      0x222222,
      '戦譜再現',
      '/replay/tactics',
      store.dispatch,
    )
    this._generateAspectButton = new Button(
      new Rect(210, 10, 90, 30),
      0xffffff,
      0x222222,
      '戦譜再現',
      '/generate/aspect',
      store.dispatch,
    )
    this._confirmHandButton = new Button(
      new Rect(310, 10, 90, 30),
      0xffffff,
      0x222222,
      '着手確認',
      '/confirm/hand',
      store.dispatch,
    )
  }

  render() {
    this.app.stage.addChild(this._startBattleButton.graphics)
    this.app.stage.addChild(this._replayTacticsButton.graphics)
    this.app.stage.addChild(this._generateAspectButton.graphics)
    this.app.stage.addChild(this._confirmHandButton.graphics)
  }
}
