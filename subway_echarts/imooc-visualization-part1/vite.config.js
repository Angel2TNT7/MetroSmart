import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': './src'
        }
    },
//   热更新，防止@失效
    server: {
        hmr: true
    }
})
