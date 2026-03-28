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
          target: 'https://openrouter.ai',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/minimax/, '/api/v1/chat/completions'),
          configure: (proxy) => {
            proxy.on('proxyReq', (proxyReq) => {
              proxyReq.setHeader('Authorization', `Bearer ${env.OPENROUTER_API_KEY ?? ''}`);
              proxyReq.setHeader('HTTP-Referer', 'http://localhost:5173');
              proxyReq.setHeader('X-Title', 'Blitz Studio');
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
