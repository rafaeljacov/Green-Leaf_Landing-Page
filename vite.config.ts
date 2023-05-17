import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    base: '/Green-Leaf_Landing-Page',
    plugins: [react()],
});
