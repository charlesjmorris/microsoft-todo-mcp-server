import { defineConfig } from 'tsup'

export default defineConfig({
  entry: [
    'src/todo-index.ts',
    'src/cli.ts',
    'src/create-mcp-config.ts',
    'src/auth-server.ts',
    'src/setup.ts',
    'src/token-manager.ts'
  ],
  outDir: 'dist',
  format: ['cjs'],
  platform: 'node',
  target: 'node18',
  shims: true,
  clean: true,
  splitting: false,
  sourcemap: true,
  dts: false,
  external: ['dotenv'],
  esbuildOptions(options) {
    options.platform = 'node'
  }
})