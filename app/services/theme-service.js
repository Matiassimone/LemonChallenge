import {useColorScheme} from 'react-native';
import {lightMode, darkMode} from '../constants/color-theme';

const useIsDarkMode = () => {
  return useColorScheme() === 'dark';
};

export const useColorTheme = () => {
  return useIsDarkMode() ? darkMode : lightMode;
};
