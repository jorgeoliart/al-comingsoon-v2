import { dirname, resolve} from 'node:path'
import { fileURLToPath} from 'node:url'
import { defineConfig } from 'vite' 

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                thankyou: resolve(__dirname, 'thankyou.html'),
                thankyouEs: resolve(__dirname, 'thankyou-es.html'), 
            },
        },
    },
})