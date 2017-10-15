import * as PIXI from 'pixi.js'
import { Dispatch } from 'redux'
import * as actions from '../../../actions/index'
import Rect from '../../../models/rect'
import { IAppState } from '../../../reducers/index'

interface ITexture {
  lineColor: number,
  bgColor: number
}

export class Button {
  private _graphics: PIXI.Graphics
  private content: string
  private rect: Rect
  private texture: ITexture
  private to: string
  private dispatch: Dispatch<IAppState>

  constructor(
    rect: Rect,
    lineColor: number,
    bgColor: number,
    content: string,
    to: string,
    dispatch: Dispatch<IAppState>,
  ) {
    this._graphics = new PIXI.Graphics()
    this.rect = rect
    this.texture = { lineColor, bgColor }
    this.content = content
    this.dispatch = dispatch
    this.onClick = this.onClick.bind(this)
    this.to = to

    this._graphics.on('mouseover', this.onHover.bind(this))
    this._graphics.on('mouseout', this.onBlur.bind(this))
    this._graphics.on('mousedown', this.onClick)
    this.initalRender()
  }

  get graphics(): PIXI.Graphics {
    return this._graphics
  }

  private onHover(): void {
    this.fill(this.texture.bgColor + 0x555555)
  }

  private onBlur(): void {
    this.fill(this.texture.bgColor)
  }

  private get textStyle() {
    return new PIXI.TextStyle({ fontSize: 15, fill: '#ffffff' })
  }

  private onClick(e: PIXI.interaction.InteractionEventTypes) {
    this.dispatch(actions.changeLayer(this.to))
  }

  private get text() {
    const basicText = new PIXI.Text(this.content, this.textStyle)
    basicText.x = this.rect.x + 15
    basicText.y = this.rect.y + 7
    return basicText
  }

  private initalRender() {
    this._graphics.lineStyle(2, this.texture.lineColor, 1)
    this.fill(this.texture.bgColor)
    this._graphics.interactive = true
    this._graphics.addChild(this.text)
  }

  private fill(color: number) {
    this._graphics.beginFill(color, 1)
    this._graphics.drawRoundedRect(this.rect.x, this.rect.y, this.rect.width, this.rect.height, 15)
    this._graphics.endFill()
  }
}
