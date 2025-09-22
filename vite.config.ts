import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: '0.0.0.0',   // слушаем все интерфейсы
    port: 3000,        // фиксируем порт
    allowedHosts: true, // РАЗРЕШИТЬ ЛЮБОЙ Host заголовок (включая ngrok)
    // Опционально, чтобы HMR работал через ngrok:
    // hmr: { host: '9a3d044ebee6.ngrok-free.app', protocol: 'wss', clientPort: 443 }
  }
})
