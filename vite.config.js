import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), {
    name: 'render-initial-html',
    apply: 'serve',
    async transformIndexHtml(html, { server }) {
      if (!server) return html

      const { renderPage } = await server.ssrLoadModule('/src/entry-server.jsx')
      return renderPage(html)
    },
  }],
})
