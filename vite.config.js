import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
plugins: [react({ production: true })],
server: {
host: true,
strictPort: true,
port: 4000,
}
})
