import * as PIXI from 'pixi.js'

type PlayerID = 1 | 2

export default class PlayerState {
  private _graphics: PIXI.Graphics

  constructor(id: PlayerID) {
    this._graphics = new PIXI.Graphics()
    this.initalRender(id)
  }

  get graphics() {
    return this._graphics
  }

  private initalRender(id: PlayerID) {
    if (id === 1) {
      this._graphics.lineStyle(2, 0x444444, 1)
      this._graphics.beginFill(0x333333, 0.25)
      this._graphics.drawRoundedRect(10, 150, 160, 200, 15)
      this._graphics.endFill()
    } else {
      this._graphics.lineStyle(2, 0x444444, 1)
      this._graphics.beginFill(0x333333, 0.25)
      this._graphics.drawRoundedRect(630, 150, 160, 200, 15)
      this._graphics.endFill()
    }
  }
}
