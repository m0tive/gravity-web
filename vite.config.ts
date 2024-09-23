import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  base: '/gravity-web/',
  plugins: [
    react(),
    viteTsconfigPaths()
  ],
  resolve: {
    alias: {
      '@': '/src' // Adjust the alias as needed
    }
  },
  server: {
    port: 3000, // Change the port if necessary
  },
});
