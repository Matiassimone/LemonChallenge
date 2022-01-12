import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View, SafeAreaView} from 'react-native';

import CountriesList from '../components/countries-list';

import {useThemeStorage} from '../store/color-theme-store';
import * as colorThemeSelectors from '../selectors/theme-selectors';

import {useCountriesStorage} from '../store/countries-store';
import * as countriesSelectors from '../selectors/countries-selectors';

import TextScrollableTicker from '../components/text-scrollable-ticker';

import {
  ghostDarkGreen,
  rubyRed,
  halfGhostGreen,
} from '../constants/colors-off-themes';
import {
  bigBoldText,
  bigText,
  mediumBoldText,
  smallBoldText,
} from '../constants/text-styles';

import i18n from '../i18n/default';

const CountryScreen = () => {
  const countrySelected = useCountriesStorage(
    countriesSelectors.selectedCountry,
  );
  const countries = useCountriesStorage(countriesSelectors.countries);

  const backgroundColor = useThemeStorage(colorThemeSelectors.backgroundColor);
  const contrastColor = useThemeStorage(colorThemeSelectors.contrastColor);
  const hightLightAColor = useThemeStorage(
    colorThemeSelectors.hightLightAColor,
  );
  const hightLightBColor = useThemeStorage(
    colorThemeSelectors.hightLightBColor,
  );

  return (
    <View style={[styles.container, {backgroundColor: contrastColor}]}>
      <SafeAreaView style={[styles.header, {backgroundColor}]}>
        <TextScrollableTicker
          message={'////「AFFECTED COUNTRIES」////'}
          textStyle={[mediumBoldText, {color: hightLightAColor}]}
        />
      </SafeAreaView>

      <CountriesList countries={countries} selectedCountry={countrySelected} />
    </View>
  );
};

export default CountryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingBottom: 100,
  },
});
