import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:3000',
  //       changeOrigin: true,
  //     },
  //   }
  // },
  build: {
    rollupOptions: {
      external: [
        '@mui/icons-material',
        '@mui/material',
        '@mui/icons-material/Delete',
        '@mui/icons-material/AddBox',
        '@mui/icons-material/FavoriteBorder',
        '@mui/icons-material/Add'

      ]
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
