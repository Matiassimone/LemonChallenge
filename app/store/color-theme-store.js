import create from 'zustand';

import * as themeService from '../services/theme-service';
import {getPublicItem, setPublicItem} from '../services/public-storage-service';

import {COLOR_THEME} from '../constants/storage-keys';
import {DARK, LIGHT, COLORS_THEMES} from '../constants/color-theme';

export const useThemeStorage = create((set, get) => ({
  currentTheme: undefined,
  sysTheme: undefined,

  fetchStorageData: async () => {
    const currentTheme = await getPublicItem(COLOR_THEME);
    const sysTheme = themeService.useSysColorTheme();

    currentTheme
      ? set({
          currentTheme: COLORS_THEMES[currentTheme],
          sysTheme: sysTheme,
        })
      : set({
          currentTheme: COLORS_THEMES[sysTheme],
          sysTheme: sysTheme,
        });
  },

  useToggleColorTheme: async () => {
    const currentTheme = await getPublicItem(COLOR_THEME);
    const sysTheme = themeService.useSysColorTheme();

    if (currentTheme) {
      set({
        currentTheme: currentTheme.isDark
          ? COLORS_THEMES[LIGHT]
          : COLORS_THEMES[DARK],
        sysTheme: currentTheme.isDark ? LIGHT : DARK,
      });
    } else {
      const nextTheme = sysTheme === DARK ? LIGHT : DARK;

      set({
        currentTheme: COLORS_THEMES[nextTheme],
        sysTheme: nextTheme,
      });
      setPublicItem(COLOR_THEME, nextTheme);
    }
  },
}));
