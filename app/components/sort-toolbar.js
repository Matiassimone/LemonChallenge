import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {useThemeStorage} from '../store/color-theme-store';
import * as colorThemeSelectors from '../selectors/theme-selectors';

import {smallBoldText} from '../constants/text-styles';

import {sortArrayOfObjects} from '../helpers/services-helper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {rubyDarkRed} from '../constants/colors-off-themes';

import i18n from '../i18n/default';

Icon.loadFont();

const SortToolBar = ({data, setCallback}) => {
  const backgroundColor = useThemeStorage(colorThemeSelectors.backgroundColor);
  const contrastColor = useThemeStorage(colorThemeSelectors.contrastColor);
  const hightLightAColor = useThemeStorage(
    colorThemeSelectors.hightLightAColor,
  );
  const hightLightBColor = useThemeStorage(
    colorThemeSelectors.hightLightBColor,
  );

  const [reverseDate, setReverseDate] = useState(false);
  const [reverseCases, setReverseCases] = useState(false);
  const [sortCasesSelected, setSortCasesSelected] = useState(true);

  useEffect(() => {
    setReverseDate(false);
    setReverseCases(false);
    setSortCasesSelected(true);
  }, [data]);

  /**
   * Optionally here we can use a Date.parse(), but in this case its
   * more performance and enought only make a string comparison.
   */
  const sortByDate = useCallback(
    reverse => {
      const sortedCases = sortArrayOfObjects(data, 'Date', reverse);
      setReverseDate(reverse);
      setSortCasesSelected(false);

      setCallback(sortedCases);
    },
    [data, setCallback],
  );

  const sortByCases = useCallback(
    reverse => {
      const sortedCases = sortArrayOfObjects(data, 'Cases', reverse);
      setReverseCases(reverse);
      setSortCasesSelected(true);

      setCallback(sortedCases);
    },
    [data, setCallback],
  );

  return (
    <View style={styles.sortToolBarContainer}>
      <View style={[styles.tagSort, {backgroundColor: contrastColor}]}>
        <Text
          style={[
            smallBoldText,
            {color: hightLightBColor, textShadowColor: rubyDarkRed},
            styles.tagSortText,
          ]}>
          {i18n.sortByCases}
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => sortByCases()}
        style={[
          styles.sortButton,
          {
            backgroundColor:
              sortCasesSelected && !reverseCases
                ? hightLightAColor
                : hightLightBColor,
          },
        ]}>
        <Icon name="sort-numeric-ascending" color={backgroundColor} size={24} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => sortByCases(true)}
        style={[
          styles.sortButton,
          {
            backgroundColor:
              sortCasesSelected && reverseCases
                ? hightLightAColor
                : hightLightBColor,
          },
        ]}>
        <Icon
          name="sort-numeric-descending"
          color={backgroundColor}
          size={24}
        />
      </TouchableOpacity>

      <View style={[styles.tagSort, {backgroundColor: contrastColor}]}>
        <Text
          style={[
            smallBoldText,
            {color: hightLightBColor, textShadowColor: rubyDarkRed},
            styles.tagSortText,
          ]}>
          {i18n.sortByDate}
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => sortByDate()}
        style={[
          styles.sortButton,
          {
            backgroundColor:
              !sortCasesSelected && !reverseDate
                ? hightLightAColor
                : hightLightBColor,
          },
        ]}>
        <Icon
          name="sort-alphabetical-ascending"
          color={backgroundColor}
          size={24}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => sortByDate(true)}
        style={[
          styles.sortButton,
          {
            backgroundColor:
              !sortCasesSelected && reverseDate
                ? hightLightAColor
                : hightLightBColor,
          },
        ]}>
        <Icon
          name="sort-alphabetical-descending"
          color={backgroundColor}
          size={24}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SortToolBar;

const styles = StyleSheet.create({
  sortToolBarContainer: {
    height: 45,
    flexDirection: 'row',
  },
  sortButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 0.2,
    borderLeftWidth: 0.2,
    borderRightWidth: 0.2,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  tagSort: {
    flex: 1.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 0.2,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  tagSortText: {
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
  },
});
