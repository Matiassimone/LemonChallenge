import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {useThemeStorage} from '../store/color-theme-store';
import * as colorThemeSelectors from '../selectors/theme-selectors';

import {smallBoldText} from '../constants/text-styles';

import i18n from '../i18n/default';

const ConfirmedCaseItem = React.memo(({date, cases, itemHeight}) => {
  const hightLightBColor = useThemeStorage(
    colorThemeSelectors.hightLightBColor,
  );

  return (
    <View
      style={[
        styles.listElement,
        {
          height: itemHeight,
          backgroundColor: hightLightBColor,
        },
      ]}>
      <Text style={smallBoldText}>{i18n.cases + cases}</Text>
      <Text>{date.slice(0, date.indexOf('T'))}</Text>
    </View>
  );
});

export default ConfirmedCaseItem;

const styles = StyleSheet.create({
  listElement: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 0.2,
  },
});
