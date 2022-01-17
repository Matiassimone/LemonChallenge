import React, {useState} from 'react';
import {StyleSheet, View, Switch} from 'react-native';

import {useThemeStorage} from '../store/color-theme-store';
import * as colorThemeSelectors from '../selectors/theme-selectors';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

Icon.loadFont();

const SwitchThemeButton = () => {
  const toggleColorTheme = useThemeStorage(
    colorThemeSelectors.useToggleColorTheme,
  );

  const currentTheme = useThemeStorage(colorThemeSelectors.currentTheme);
  const [isDark, setIsDark] = useState(currentTheme.isDark);

  const backgroundColor = useThemeStorage(colorThemeSelectors.backgroundColor);
  const contrastColor = useThemeStorage(colorThemeSelectors.contrastColor);
  const hightLightAColor = useThemeStorage(
    colorThemeSelectors.hightLightAColor,
  );
  const hightLightBColor = useThemeStorage(
    colorThemeSelectors.hightLightBColor,
  );

  const toggleSwitch = () => {
    setIsDark(prevState => !prevState);
    toggleColorTheme();
  };

  return (
    <View
      style={[
        styles.colorThemeContainer,
        {backgroundColor: contrastColor, borderColor: backgroundColor},
      ]}>
      <Switch
        trackColor={{false: hightLightBColor, true: hightLightBColor}}
        thumbColor={hightLightAColor}
        ios_backgroundColor={backgroundColor}
        onValueChange={toggleSwitch}
        value={isDark}
        style={styles.button}
      />
      <View style={styles.icon}>
        <Icon name="theme-light-dark" color={backgroundColor} size={36} />
      </View>
    </View>
  );
};

export default SwitchThemeButton;

const styles = StyleSheet.create({
  colorThemeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderTopWidth: 2,
    paddingVertical: 20,
  },
  button: {
    marginHorizontal: 20,
  },
  icon: {
    flex: 1,
    alignItems: 'flex-end',
    marginHorizontal: 20,
  },
});
