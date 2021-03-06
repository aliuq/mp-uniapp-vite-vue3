import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTagify,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'

export default defineConfig({
  shortcuts: [
    {
      'border-base': 'border-gray-200 dark:border-dark-200',
      'bg-base': 'bg-white dark:bg-dark-100',
      'color-base': 'text-gray-900 dark:text-gray-300',
      'color-fade': 'text-gray-900:50 dark:text-gray-300:50',
    },
  ],
  rules: [],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      collections: {
        carbon: () => import('@iconify-json/carbon/icons.json').then(i => i.default),
        mdi: () => import('@iconify-json/mdi/icons.json').then(i => i.default),
        my: FileSystemIconLoader(
          './src/icons',
          svg => svg.replace(/#fff/, 'currentColor'),
        ),
      },
      scale: 1.2,
      warn: true,
    }),
    presetTypography(),
    presetTagify(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  theme: {
    // Fix '*' selector in miniprogram
    preflightBase: false,
  },
})

