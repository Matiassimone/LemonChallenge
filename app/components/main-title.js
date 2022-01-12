import React from 'react';
import {Text, StyleSheet} from 'react-native';

import {luminusWhite} from '../constants/colors-off-themes';
import {bigBoldText, mediumText} from '../constants/text-styles';

import i18n from '../i18n/default';

const MainTitle = () => {
  return (
    <>
      <Text
        numberOfLines={2}
        ellipsizeMode="clip"
        style={[mediumText, {color: luminusWhite}, styles.text]}>
        {i18n.mainTitleCovid}
      </Text>
      <Text
        numberOfLines={2}
        ellipsizeMode="clip"
        style={[bigBoldText, {color: luminusWhite}, styles.text]}>
        {i18n.mainTitleAppName}
      </Text>
    </>
  );
};

export default MainTitle;

const styles = StyleSheet.create({
  text: {
    marginLeft: 8,
  },
});
