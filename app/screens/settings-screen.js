import React from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';

import {useThemeStorage} from '../store/color-theme-store';
import * as colorThemeSelectors from '../selectors/theme-selectors';

import {mediumBoldText} from '../constants/text-styles';

import i18n from '../i18n/default';

import About from '../components/about';
import LogoutButton from '../components/logout-button';
import SwitchThemeButton from '../components/switch-theme-button';
import TextScrollableTicker from '../components/text-scrollable-ticker';

const SettingsScreen = () => {
  const backgroundColor = useThemeStorage(colorThemeSelectors.backgroundColor);
  const hightLightAColor = useThemeStorage(
    colorThemeSelectors.hightLightAColor,
  );

  return (
    <View style={[styles.container, {backgroundColor}]}>
      <SafeAreaView style={[styles.headerContainer, {backgroundColor}]}>
        <TextScrollableTicker
          message={i18n.settings}
          textStyle={[mediumBoldText, {color: hightLightAColor}, styles.header]}
          duration={5000}
        />
      </SafeAreaView>

      <LogoutButton />
      <SwitchThemeButton />

      <About />
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    paddingBottom: 20,
  },
});
