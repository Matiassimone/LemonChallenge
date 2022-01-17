import React from 'react';
import {StyleSheet, Text} from 'react-native';

import {useThemeStorage} from '../store/color-theme-store';
import * as colorThemeSelectors from '../selectors/theme-selectors';

import {rubyDarkRed} from '../constants/colors-off-themes';
import {mediumBoldText} from '../constants/text-styles';

const DictionaryTag = React.memo(({letter, itemHeight}) => {
  const contrastColor = useThemeStorage(colorThemeSelectors.contrastColor);
  const hightLightBColor = useThemeStorage(
    colorThemeSelectors.hightLightBColor,
  );

  return (
    <Text
      style={[
        mediumBoldText,
        styles.tag,
        {
          height: itemHeight,
          color: hightLightBColor,
          backgroundColor: contrastColor,
          textShadowColor: rubyDarkRed,
        },
      ]}>
      / {letter} /
    </Text>
  );
});

export default DictionaryTag;

const styles = StyleSheet.create({
  tag: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 0.2,
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
  },
});
