import * as PIXI from 'pixi.js';
import { Toolbar } from './ui/toolbar/index'

function render(app: PIXI.Application): void {
  new Toolbar(app).render();
}

const initalize = () => {
  const app = new PIXI.Application(800, 600, { backgroundColor: 0x222222 }, true);
  document.body.appendChild(app.view)
  render(app);
}

document.addEventListener('DOMContentLoaded', initalize, false)