import React from 'react';
import {FlatList} from 'react-native';

import {useCountriesStorage} from '../store/countries-store';
import * as countriesSelectors from '../selectors/countries-selectors';

import CountryElement from './country-element';
import DictionaryTag from './dictionary-tag';

const CountriesList = ({navigation}) => {
  const countries = useCountriesStorage(countriesSelectors.countries);
  const selectCountry = useCountriesStorage(countriesSelectors.selectCountry);

  const stickyHeaderIndices = [];
  const ITEM_HEIGHT = 52;

  const addDisctionayTagElements = data => {
    return data.flatMap((currentElement, index, arry) => {
      const currentFirstLetter = currentElement.Country[0];
      const prevFirstLetter = arry[index - 1]?.Country[0];

      if (currentFirstLetter !== prevFirstLetter) {
        stickyHeaderIndices.push(index + stickyHeaderIndices.length);
        return [{letter: currentFirstLetter}, currentElement];
      } else {
        return currentElement;
      }
    });
  };

  const getItemLayout = (_, index) => ({
    length: ITEM_HEIGHT,
    offset: ITEM_HEIGHT * index,
    index,
  });

  const onPressItem = item => {
    selectCountry(item);
    navigation.jumpTo('Confirmed Cases');
  };

  const mappedData = addDisctionayTagElements(countries);

  return (
    <FlatList
      getItemLayout={getItemLayout}
      data={mappedData}
      stickyHeaderIndices={stickyHeaderIndices}
      renderItem={({item}) => {
        const {letter, slug} = item;

        if (letter) {
          return (
            <DictionaryTag
              letter={letter}
              key={letter}
              itemHeight={ITEM_HEIGHT}
            />
          );
        } else {
          return (
            <CountryElement
              country={item}
              key={slug}
              itemHeight={ITEM_HEIGHT}
              onPressCallback={() => onPressItem(item)}
            />
          );
        }
      }}
    />
  );
};

export default CountriesList;
