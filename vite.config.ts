import path from 'path'
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Unocss from 'unocss/vite'
import uni from '@dcloudio/vite-plugin-uni'

const r = (p: string) => path.resolve(__dirname, p)

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: false,
  },
  resolve: {
    alias: {
      '~': r('./src'),
    },
  },
  plugins: [
    Components({
      dts: 'src/components.d.ts',
      dirs: ['src/components', 'src/layouts'],
      resolvers: [],
    }),
    uni({
      vueOptions: {
        reactivityTransform: true,
      },
    }),
    AutoImport({
      imports: [
        'vue',
        // 注意: 针对可能出现的 `$` 和 `$$`，手动排除
        // https://vuejs.org/guide/extras/reactivity-transform.html#refs-vs-reactive-variables
        {
          'vue/macros': ['$ref', '$shallowRef', '$toRef', '$customRef', '$computed'],
        },
        'uni-app',
      ],
      dts: 'src/auto-imports.d.ts',
      dirs: [
        'src/composables',
        'src/store',
      ],
      vueTemplate: true,
      eslintrc: {
        enabled: true,
        filepath: 'src/.eslintrc-auto-import.json',
        globalsPropValue: true,
      },
    }),
    Unocss(),
    {
      name: 'build-time',
      buildStart() {
        console.time('build time')
      },
      buildEnd() {
        console.timeEnd('build time')
      },
    },
  ],
})
