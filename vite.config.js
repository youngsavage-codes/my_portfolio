import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base:'/my_portfolio',
  plugins: [react()],
  css: {
    preprocessorOptions: {
      // Add PostCSS configuration here
      postcss: require('./postcss.config.js'),
    },
  },
});
