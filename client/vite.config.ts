import {defineConfig} from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {find: '@apis', replacement: path.resolve(__dirname, 'src/apis')},
      {find: '@components', replacement: path.resolve(__dirname, 'src/components')},
      {find: '@constants', replacement: path.resolve(__dirname, 'src/constants')},
      {find: '@mocks', replacement: path.resolve(__dirname, 'src/mocks')},
      {find: '@pages', replacement: path.resolve(__dirname, 'src/pages')},
      {find: '@typedef', replacement: path.resolve(__dirname, 'src/typedef')},
    ],
  },
});
