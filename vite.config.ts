import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import path from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: './lib/index.ts',
      name: 'index',
      fileName: 'index'
    }
  },
  plugins: [dts()],
  resolve: {
    alias: {
      "@":path.resolve(__dirname,'lib'),
    },
    dedupe: ['vue'],
  },
})
