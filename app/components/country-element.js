import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {useThemeStorage} from '../store/color-theme-store';
import * as colorThemeSelectors from '../selectors/theme-selectors';

import {useCountriesStorage} from '../store/countries-store';
import * as countriesSelectors from '../selectors/countries-selectors';

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

const CountryElement = ({country}) => {
  const backgroundColor = useThemeStorage(colorThemeSelectors.backgroundColor);
  const contrastColor = useThemeStorage(colorThemeSelectors.contrastColor);
  const hightLightAColor = useThemeStorage(
    colorThemeSelectors.hightLightAColor,
  );
  const hightLightBColor = useThemeStorage(
    colorThemeSelectors.hightLightBColor,
  );

  return (
    <TouchableOpacity
      style={{
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: hightLightBColor,
      }}>
      <Text>{country.ISO2}</Text>
      <Text>{country.Country}</Text>
    </TouchableOpacity>
  );
};

export default CountryElement;

const styles = StyleSheet.create({});
