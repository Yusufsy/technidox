import { rmSync } from 'node:fs'
import { spawnSync } from 'node:child_process'

for (const path of ['.nuxt', '.output']) {
  rmSync(path, { recursive: true, force: true })
}

const result = spawnSync(
  process.platform === 'win32' ? 'npm.cmd' : 'npm',
  ['run', 'build:css'],
  { stdio: 'inherit' }
)

if (result.status !== 0) {
  process.exit(result.status ?? 1)
}
