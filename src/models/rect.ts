export default class Rect {
  private _x: number
  private _y: number
  private _width: number
  private _height: number

  constructor(x: number, y: number, width: number, height: number) {
    this._x = x
    this._y = y
    this._width = width
    this._height = height
  }

  get x(): number {
    return this._x
  }

  get y(): number {
    return this._y
  }

  get width(): number {
    return this._width
  }

  get height(): number {
    return this._height
  }
}
