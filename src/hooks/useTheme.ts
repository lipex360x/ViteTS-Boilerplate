import create from 'zustand'

import { localStorageService } from '@/services/'
import dark from '@/styles/themes/dark'
import light from '@/styles/themes/light'

interface UseThemeProviderProps {
  theme: typeof light | typeof dark
  defaultTheme: () => void
  setTheme: () => void
}

export const useTheme = create<UseThemeProviderProps>((set) => ({
  theme: dark,
  defaultTheme: () => {
    set((state) => {
      const getTheme = localStorageService.getItem('theme')

      const swithTheme = !getTheme
        ? state.theme
        : getTheme === 'dark'
        ? dark
        : light

      localStorageService.setItem('theme', swithTheme.title)

      return { theme: swithTheme }
    })
  },

  setTheme: () => {
    set(() => {
      const getTheme = localStorageService.getItem('theme')

      const swithTheme = getTheme === 'dark' ? light : dark

      localStorageService.setItem('theme', swithTheme.title)

      return { theme: swithTheme }
    })
  },
}))
