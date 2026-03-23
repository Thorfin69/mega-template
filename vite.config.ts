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
        rewrite: (path) => path.replace(/^\/api\/minimax/, '/v1/text/chatcompletion_v2'),
        configure: (proxy) => {
          proxy.on('proxyReq', (proxyReq) => {
            proxyReq.setHeader('Authorization', `Bearer ${process.env.MINIMAX_API_KEY}`);
          });
        },
      },
      '/api/unsplash': {
        target: 'https://api.unsplash.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/unsplash/, '/search/photos'),
        configure: (proxy) => {
          proxy.on('proxyReq', (proxyReq) => {
            proxyReq.setHeader('Authorization', `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`);
            proxyReq.setHeader('Accept-Version', 'v1');
          });
        },
      },
    },
  },
});
