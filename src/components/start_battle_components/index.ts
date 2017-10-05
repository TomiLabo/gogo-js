import * as PIXI from 'pixi.js'
import Board from './board'
import PlayerState from './player_state'

export default class StartBattleComponent {
  private _graphics: PIXI.Graphics
  private player1: PlayerState
  private player2: PlayerState
  private board: Board

  constructor() {
    this._graphics = new PIXI.Graphics()
    this.player1 = new PlayerState(1)
    this.player2 = new PlayerState(2)
    this.board = new Board()
    this.initalRender()
  }

  get graphics() {
    return this._graphics
  }

  private initalRender() {
    this._graphics.addChild(this.board.graphics)
    this._graphics.addChild(this.player1.graphics)
    this._graphics.addChild(this.player2.graphics)
  }
}
