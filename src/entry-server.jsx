import { renderToString } from 'react-dom/server'
import App from './App'

export function renderPage(html) {
  return html.replace('<div id="root"></div>', () => `<div id="root">${renderToString(<App />)}</div>`)
}
