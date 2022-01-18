import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Linking, View} from 'react-native';

import {useThemeStorage} from '../store/color-theme-store';
import * as colorThemeSelectors from '../selectors/theme-selectors';

import {smallBoldText} from '../constants/text-styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

Icon.loadFont();

const About = () => {
  const contrastColor = useThemeStorage(colorThemeSelectors.contrastColor);

  const openWeb = () => {
    Linking.openURL('https://github.com/Matiassimone');
  };

  return (
    <View style={styles.aboutContainer}>
      <TouchableOpacity
        style={[styles.link, {borderColor: contrastColor}]}
        onPress={openWeb}>
        <Text style={[smallBoldText, {color: contrastColor}]}>
          Made with ❤️,
          {'\n'}
          Matias Simone 2022.
        </Text>
        <Icon name="github" color={contrastColor} size={36} />
      </TouchableOpacity>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  aboutContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  link: {
    borderWidth: 1,
    borderRadius: 50,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
});
