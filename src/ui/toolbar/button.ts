type Position = {
  x: number,
  y: number,
}

type Size = {
  width: number,
  height: number,
}

type Texture = {
  lineColor: number,
  bgColor: number
}

export class Button {
  private _graphics: PIXI.Graphics
  private content: string
  private pos: Position
  private size: Size
  private texture: Texture

  constructor(x: number, y: number, width: number, height: number, lineColor: number, bgColor: number, content: string) {
    this._graphics = new PIXI.Graphics();
    this.pos = { x, y }
    this.texture = { lineColor, bgColor }
    this.size = { width, height }
    this.content = content;
    this.render()

    this._graphics.addChild(this.text)
  }

  public get graphics(): PIXI.Graphics {
    return this._graphics
  }

  private get textStyle() {
    return new PIXI.TextStyle({ fontSize: 15, fill: '#ffffff' })
  }

  private render() {
    this._graphics.lineStyle(2, this.texture.lineColor, 1);
    this._graphics.beginFill(this.texture.bgColor, 0.25);
    this._graphics.drawRoundedRect(this.pos.x, this.pos.y, this.size.width, this.size.height, 15);
    this._graphics.endFill();
  }

  private get text() {
    const basicText = new PIXI.Text(this.content, this.textStyle);
    basicText.x = this.pos.x + 15;
    basicText.y = this.pos.y + 7;
    return basicText;
  }
}