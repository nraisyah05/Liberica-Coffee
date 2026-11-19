import { mkdtemp, readFile, rm, rmdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'
import { build } from 'vite'

const { output } = await build({
  build: { ssr: 'src/entry-server.jsx', write: false },
})
const entry = output.find(chunk => chunk.type === 'chunk' && chunk.isEntry)
const temporaryDir = await mkdtemp('dist/.prerender-')
// Keep the server entry near node_modules so Node can resolve React.
const serverEntry = join(temporaryDir, 'entry.mjs')

try {
  await writeFile(serverEntry, entry.code)
  const { renderPage } = await import(pathToFileURL(serverEntry).href)
  const htmlFile = 'dist/index.html'
  await writeFile(htmlFile, renderPage(await readFile(htmlFile, 'utf8')))
} finally {
  await rm(serverEntry, { force: true })
  await rmdir(temporaryDir)
}
