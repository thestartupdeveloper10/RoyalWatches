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
        './@mui/icons-material',
        './@mui/material',
        './@mui/icons-material/Delete',
        './@mui/icons-material/AddBox',
        './@mui/icons-material/FavoriteBorder',
        './@mui/icons-material/Add',
        './@mui/icons-material/LocalMall',
        './@mui/icons-material/Login',
        './@mui/icons-material/Menu',
        './@mui/icons-material/Close',
        './@mui/icons-material/ArrowForward'

      ]
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
