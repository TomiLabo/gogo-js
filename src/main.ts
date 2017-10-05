import * as PIXI from 'pixi.js'
import App from './containers/app'
import store from './stores/index'

function render(app: PIXI.Application): void {
   new App(app, store).render()
}

const initalize = () => {
  const app = new PIXI.Application(800, 600, { backgroundColor: 0x222222 }, true)
  document.body.appendChild(app.view)
  render(app)
}

document.addEventListener('DOMContentLoaded', initalize, false)
