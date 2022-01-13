import React from 'react';
import {FlatList} from 'react-native';

import CountryElement from './country-element';
import DictionaryTag from './dictionary-tag';

const CountriesList = ({countries, selectedCountry}) => {
  const stickyHeaderIndices = [];
  const selectedCountryIndex = countries.indexOf(selectedCountry);
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

  const mappedData = addDisctionayTagElements(countries);

  return (
    <FlatList
      //initialScrollIndex={selectedCountryIndex ? selectedCountryIndex : 0}
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
            />
          );
        }
      }}
    />
  );
};

export default CountriesList;
