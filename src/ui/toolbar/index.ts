import { Button } from './button'
import * as store from '../../stores/index'

export class Toolbar {
  private app: PIXI.Application
  private _startBattleButton: Button
  private _replayTacticsButton: Button
  private _generateAspectButton: Button
  private _confirmHandButton: Button

  constructor(app: PIXI.Application) {
    this.app = app
    this._startBattleButton = new Button(10, 10, 90, 30, 0xffffff, 0xffffff, '対戦実行')
    this._replayTacticsButton = new Button(110, 10, 90, 30, 0xffffff, 0xffffff, '戦譜再現')
    this._generateAspectButton = new Button(210, 10, 90, 30, 0xffffff, 0xffffff, '戦譜再現')
    this._confirmHandButton = new Button(310, 10, 90, 30, 0xffffff, 0xffffff, '着手確認')
  }

  render() {
    this.app.stage.addChild(this._startBattleButton.graphics);
    this.app.stage.addChild(this._replayTacticsButton.graphics);
    this.app.stage.addChild(this._generateAspectButton.graphics);
    this.app.stage.addChild(this._confirmHandButton.graphics);
  }
}