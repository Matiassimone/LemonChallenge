import React, {useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';

import {useThemeStorage} from '../store/color-theme-store';
import * as colorThemeSelectors from '../selectors/theme-selectors';

import {useCountriesStorage} from '../store/countries-store';
import * as countriesSelectors from '../selectors/countries-selectors';

import CountryElement from './country-element';

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

const CountriesList = ({countries, selectedCountry}) => {
  const backgroundColor = useThemeStorage(colorThemeSelectors.backgroundColor);
  const contrastColor = useThemeStorage(colorThemeSelectors.contrastColor);
  const hightLightAColor = useThemeStorage(
    colorThemeSelectors.hightLightAColor,
  );
  const hightLightBColor = useThemeStorage(
    colorThemeSelectors.hightLightBColor,
  );

  return (
    <FlatList
      data={countries}
      renderItem={({item, index, separators}) => (
        <CountryElement country={item} key={item.slug} />
      )}
    />
  );
};

export default CountriesList;

const styles = StyleSheet.create({});
