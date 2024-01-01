import { defineConfig } from 'vite';

export default defineConfig({
  publicDir: 'public',
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
            return 'assets/[name]-[hash][extname]';
          }

          if (/\.css$/.test(name ?? '')) {
            return 'styles/[name]-[hash][extname]';
          }
          
          return 'assets/others/[name]-[hash][extname]';
        },
      },
    },
  },
});
