// Guard: this project is JavaScript-only. Fail if any TypeScript files appear.
import { readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

const bad = []
function walk(dir) {
  for (const name of readdirSync(dir)) {
    if (name === 'node_modules' || name === 'dist' || name === '.git') continue
    const p = join(dir, name)
    if (statSync(p).isDirectory()) walk(p)
    else if (/\.(ts|tsx|mts|cts)$/.test(name)) bad.push(p)
  }
}
walk(process.cwd())
if (bad.length) {
  console.error('TypeScript files are not allowed in this project:\n' + bad.join('\n'))
  process.exit(1)
}
console.log('JS-only check passed: no TypeScript files found.')
