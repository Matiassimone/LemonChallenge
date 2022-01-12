import create from 'zustand';

import * as themeService from '../services/theme-service';
import {getPublicItem, setPublicItem} from '../services/public-storage-service';

import {COLOR_THEME} from '../constants/storage-keys';
import {DARK, LIGHT, COLORS_THEMES} from '../constants/color-theme';

export const useThemeStorage = create((set, get) => ({
  currentTheme: undefined,

  fetchStorageData: async () => {
    const currentTheme = await getPublicItem(COLOR_THEME);

    currentTheme
      ? set({
          currentTheme: COLORS_THEMES[currentTheme],
        })
      : set({
          currentTheme: COLORS_THEMES[themeService.useSysColorTheme()],
        });
  },

  useToggleColorTheme: async () => {
    const currentTheme = await getPublicItem(COLOR_THEME);

    if (currentTheme) {
      set({
        currentTheme:
          currentTheme === DARK ? COLORS_THEMES[LIGHT] : COLORS_THEMES[DARK],
      });
    } else {
      const nextTheme = themeService.useSysColorTheme() === DARK ? LIGHT : DARK;

      set({
        currentTheme: COLORS_THEMES[nextTheme],
      });
      setPublicItem(COLOR_THEME, nextTheme);
    }
  },
}));
