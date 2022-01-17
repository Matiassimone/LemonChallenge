import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import {useThemeStorage} from '../store/color-theme-store';
import * as colorThemeSelectors from '../selectors/theme-selectors';

import {smallBoldText} from '../constants/text-styles';

const CountryElement = React.memo(({country, itemHeight, onPressCallback}) => {
  const hightLightBColor = useThemeStorage(
    colorThemeSelectors.hightLightBColor,
  );

  return (
    <TouchableOpacity
      onPress={onPressCallback}
      style={[
        styles.listElement,
        {
          height: itemHeight,
          backgroundColor: hightLightBColor,
        },
      ]}>
      <Text style={smallBoldText}>{country.ISO2}</Text>
      <Text>{country.Country}</Text>
    </TouchableOpacity>
  );
});

export default CountryElement;

const styles = StyleSheet.create({
  listElement: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 0.2,
  },
});
