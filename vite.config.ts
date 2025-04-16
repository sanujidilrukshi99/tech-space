import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // This allows network access
    port: 5173, // Default port
    strictPort: true // Ensures the port is strictly used
  },
  build: {
    target: 'esnext',
    minify: 'esbuild',
    cssMinify: true,
    cssCodeSplit: true,
    rollupOptions: {
      input: './src/main.tsx',
      output: {
        manualChunks: {
          'framer-motion': ['framer-motion'],
        },
      },
    },
    chunkSizeWarningLimit: 500,
    reportCompressedSize: false
  },
  optimizeDeps: {
    include: ['framer-motion']
  }
});
