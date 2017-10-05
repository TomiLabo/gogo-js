export default class Board {
  private _graphics: PIXI.Graphics

  constructor() {
    this._graphics = new PIXI.Graphics()
    this.initalRender()
  }

  get graphics() {
    return this._graphics
  }

  private initalRender() {
    this._graphics.lineStyle(2, 0x449944, 1)
    for (let i = 0; i < 11; i++) {
      for (let j = 0; j < 11; j++) {
        const dx = i * 35
        const dy = j * 35
        this._graphics.drawRoundedRect(210 + dx, 120 + dy, 35, 35, 0)
      }
    }
  }
}
