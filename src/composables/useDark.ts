import { useDark, useToggle } from '@vueuse/core'

export const isDark = useDark({
  onChanged: (val) => {
    uni.setStorageSync('theme', val ? 'dark' : 'light')
  },
})
export const toggleDark = useToggle(isDark)
