import React from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';

import {useThemeStorage} from '../store/color-theme-store';
import * as colorThemeSelectors from '../selectors/theme-selectors';

import {useCountriesStorage} from '../store/countries-store';
import * as countriesSelectors from '../selectors/countries-selectors';

import TextScrollableTicker from '../components/text-scrollable-ticker';

import ConfirmedCasesList from '../components/confirmed-cases-list';

import {mediumBoldText} from '../constants/text-styles';

const ConfirmedCasesScreen = () => {
  const countrySelected = useCountriesStorage(
    countriesSelectors.selectedCountry,
  );

  const backgroundColor = useThemeStorage(colorThemeSelectors.backgroundColor);
  const contrastColor = useThemeStorage(colorThemeSelectors.contrastColor);
  const hightLightAColor = useThemeStorage(
    colorThemeSelectors.hightLightAColor,
  );

  return (
    <View style={[styles.container, {backgroundColor: contrastColor}]}>
      <SafeAreaView style={[styles.headerContainer, {backgroundColor}]}>
        <TextScrollableTicker
          message={`「${countrySelected.Country}」`}
          textStyle={[mediumBoldText, {color: hightLightAColor}, styles.header]}
          duration={5000}
        />
      </SafeAreaView>

      <ConfirmedCasesList />
    </View>
  );
};

export default ConfirmedCasesScreen;

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
