import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

const isLib = process.env.MODE === 'lib'

const dev = defineConfig({
  plugins: [svelte()],
})

const lib = defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/lib/Button.svelte'),
      name: 'CustomButton',
      fileName: 'button',
    },
  },
  plugins: [
    svelte({
      compilerOptions: {
        customElement: true,
      },
      include: 'src/lib/Button.svelte',
    }),
    svelte({
      compilerOptions: {
        customElement: false,
      },
      emitCss: false,
      exclude: 'src/lib/Button.svelte',
    }),
  ],
})

export default isLib ? lib : dev
