import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import jsconfigPaths from 'vite-jsconfig-paths';

export default defineConfig({
  base: '',
  plugins: [vue(), vueJsx(), jsconfigPaths()],
});
