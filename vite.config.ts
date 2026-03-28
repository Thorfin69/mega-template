import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Load .env, .env.local, .env.[mode], .env.[mode].local from the project root.
  // The third argument '' means load ALL variables (not just VITE_* prefixed ones).
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    resolve: {
      alias: {
        'motion/react': 'motion/react',
      },
    },
    server: {
      proxy: {
        '/api/minimax': {
          target: 'https://api.minimax.io',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/minimax/, '/v1/text/chatcompletion_v2'),
          configure: (proxy) => {
            proxy.on('proxyReq', (proxyReq) => {
              proxyReq.setHeader('Authorization', `Bearer ${env.MINIMAX_API_KEY ?? ''}`);
            });
          },
        },
        '/api/unsplash': {
          target: 'https://api.unsplash.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/unsplash/, '/search/photos'),
          configure: (proxy) => {
            proxy.on('proxyReq', (proxyReq) => {
              proxyReq.setHeader('Authorization', `Client-ID ${env.UNSPLASH_ACCESS_KEY ?? ''}`);
              proxyReq.setHeader('Accept-Version', 'v1');
            });
          },
        },
      },
    },
  };
});
