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

    if (currentTheme) {
      set({
        currentTheme: COLORS_THEMES[currentTheme],
        sysTheme: currentTheme,
      });
    } else {
      set({
        currentTheme: COLORS_THEMES[sysTheme],
        sysTheme: sysTheme,
      });
    }
  },

  useToggleColorTheme: async () => {
    const currentTheme = get().currentTheme;
    const sysTheme = themeService.useSysColorTheme();

    if (currentTheme) {
      const nextTheme = currentTheme.isDark ? LIGHT : DARK;

      set({
        currentTheme: COLORS_THEMES[nextTheme],
        sysTheme: nextTheme,
      });

      setPublicItem(COLOR_THEME, nextTheme);
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
