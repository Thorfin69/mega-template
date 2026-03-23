import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'motion/react': 'motion/react',
    },
  },
  server: {
    proxy: {
      '/api/minimax': {
        target: 'https://api.minimax.chat',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/minimax/, '/v1'),
      },
    },
  },
});
