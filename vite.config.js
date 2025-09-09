import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
   plugins: [react()],
   server: {
      host: true,
      port: 5179, // sizning portingiz
      strictPort: true,
      allowedHosts: ['arcrobot.ru', 'localhost', '127.0.0.1'] // ruxsat berilgan hostlar
   }
})
