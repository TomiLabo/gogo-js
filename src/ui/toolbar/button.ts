import * as PIXI from 'pixi.js'
import { Dispatch } from 'redux'
import * as actions from '../../actions/index'
import { IAppState } from '../../reducers/index'

interface IPosition {
  x: number,
  y: number,
}

interface ISize {
  width: number,
  height: number,
}

interface ITexture {
  lineColor: number,
  bgColor: number
}

export class Button {
  private _graphics: PIXI.Graphics
  private content: string
  private pos: IPosition
  private size: ISize
  private texture: ITexture
  private to: string
  private dispatch: Dispatch<IAppState>

  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    lineColor: number,
    bgColor: number,
    content: string,
    to: string,
    dispatch: Dispatch<IAppState>,
  ) {
    this._graphics = new PIXI.Graphics()
    this.pos = { x, y }
    this.texture = { lineColor, bgColor }
    this.size = { width, height }
    this.content = content
    this.dispatch = dispatch
    this.onClick = this.onClick.bind(this)
    this.to = to

    this.initalRender()
  }

  get graphics(): PIXI.Graphics {
    return this._graphics
  }

  private get textStyle() {
    return new PIXI.TextStyle({ fontSize: 15, fill: '#ffffff' })
  }

  private onClick(e: PIXI.interaction.InteractionEventTypes) {
    this.dispatch(actions.changeLayer(this.to))
  }

  private get text() {
    const basicText = new PIXI.Text(this.content, this.textStyle)
    basicText.x = this.pos.x + 15
    basicText.y = this.pos.y + 7
    return basicText
  }

  private initalRender() {
    this._graphics.lineStyle(2, this.texture.lineColor, 1)
    this._graphics.beginFill(this.texture.bgColor, 0.25)
    this._graphics.drawRoundedRect(this.pos.x, this.pos.y, this.size.width, this.size.height, 15)
    this._graphics.endFill()
    this._graphics.interactive = true
    this._graphics.on('mouseup', this.onClick)
    this._graphics.addChild(this.text)
  }
}
