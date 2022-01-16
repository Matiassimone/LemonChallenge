import React from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';

import CountriesList from '../components/countries-list';

import {useThemeStorage} from '../store/color-theme-store';
import * as colorThemeSelectors from '../selectors/theme-selectors';

import TextScrollableTicker from '../components/text-scrollable-ticker';

import {mediumBoldText} from '../constants/text-styles';

import i18n from '../i18n/default';

const CountryScreen = ({navigation}) => {
  const backgroundColor = useThemeStorage(colorThemeSelectors.backgroundColor);
  const contrastColor = useThemeStorage(colorThemeSelectors.contrastColor);
  const hightLightAColor = useThemeStorage(
    colorThemeSelectors.hightLightAColor,
  );

  return (
    <View style={[styles.container, {backgroundColor: contrastColor}]}>
      <SafeAreaView style={{backgroundColor}}>
        <TextScrollableTicker
          message={i18n.affectedCountries}
          textStyle={[mediumBoldText, {color: hightLightAColor}, styles.header]}
          duration={5000}
        />
      </SafeAreaView>

      <CountriesList navigation={navigation} />
    </View>
  );
};

export default CountryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingBottom: 20,
  },
});
