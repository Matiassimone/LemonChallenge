import React, {useState, useEffect} from 'react';
import {FlatList, Text, StyleSheet, View} from 'react-native';

import {useCountriesStorage} from '../store/countries-store';
import * as countriesSelectors from '../selectors/countries-selectors';

import {useThemeStorage} from '../store/color-theme-store';
import * as colorThemeSelectors from '../selectors/theme-selectors';

import ConfirmedCaseItem from './confirmed-case-item';
import SortToolBar from './sort-toolbar';

import {bigBoldText} from '../constants/text-styles';
import {rubyDarkRed} from '../constants/colors-off-themes';

import i18n from '../i18n/default';

const ConfirmedCasesList = () => {
  const backgroundColor = useThemeStorage(colorThemeSelectors.backgroundColor);
  const hightLightAColor = useThemeStorage(
    colorThemeSelectors.hightLightAColor,
  );

  const selectedCountryCases = useCountriesStorage(
    countriesSelectors.selectedCountryCases,
  );

  const [sortedCases, setSortedCases] = useState();
  const ITEM_HEIGHT = 52;

  useEffect(() => {
    setSortedCases(selectedCountryCases);
  }, [selectedCountryCases]);

  const getItemLayout = (_, index) => ({
    length: ITEM_HEIGHT,
    offset: ITEM_HEIGHT * index,
    index,
  });

  const setCallback = newSortedCases => {
    setSortedCases([...newSortedCases]);
  };

  return (
    <>
      {sortedCases?.length ? (
        <>
          <SortToolBar data={selectedCountryCases} setCallback={setCallback} />
          <FlatList
            data={sortedCases}
            getItemLayout={getItemLayout}
            renderItem={({item, index}) => {
              const {Date, Cases} = item;
              return (
                <ConfirmedCaseItem
                  date={Date}
                  cases={Cases}
                  key={`${index}-${Date}`}
                  itemHeight={ITEM_HEIGHT}
                />
              );
            }}
          />
        </>
      ) : (
        <View style={[styles.container, {backgroundColor}]}>
          <Text
            style={[
              bigBoldText,
              {color: hightLightAColor, textShadowColor: rubyDarkRed},
              styles.emptyScreenText,
            ]}>
            {i18n.emptyScreen}
          </Text>
        </View>
      )}
    </>
  );
};

export default ConfirmedCasesList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyScreenText: {
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
  },
});
