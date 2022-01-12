import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import GoogleSignin from '../components/google-signin';

import MainTitle from '../components/main-title';
import TextScrollableTicker from '../components/text-scrollable-ticker';
import TextScollableCustomTicker from '../components/text-scollable-custom-ticker';

import {useThemeStorage} from '../store/color-theme-store';
import * as colorThemeSelectors from '../selectors/theme-selectors';

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

const LoginScreen = () => {
  const backgroundColor = useThemeStorage(colorThemeSelectors.backgroundColor);
  const contrastColor = useThemeStorage(colorThemeSelectors.contrastColor);
  const hightLightAColor = useThemeStorage(
    colorThemeSelectors.hightLightAColor,
  );
  const hightLightBColor = useThemeStorage(
    colorThemeSelectors.hightLightBColor,
  );

  return (
    <View style={[styles.rowContainer, {backgroundColor}]}>
      <View style={[styles.littleColumn, {backgroundColor: contrastColor}]}>
        <TextScollableCustomTicker
          message={i18n.logguinTypeEmergencyMessage}
          textStyles={[bigBoldText, {color: hightLightBColor}]}
          duration={5000}
          vertical={true}
          easingAnimation="sin"
          dimensionDivider={20}
        />
      </View>

      <View style={[styles.bigColumn, {backgroundColor}]}>
        <View style={[styles.headerContainer, {backgroundColor}]}>
          <MainTitle />
        </View>

        <View style={[{backgroundColor}]}>
          <TextScrollableTicker
            message={i18n.logguinCovidEmergencyMessage}
            repeatSpacer={0}
            duration={10000}
            textStyle={[mediumBoldText, {color: hightLightAColor}]}
          />
          <TextScrollableTicker
            message={i18n.logguinScreenSeparator}
            repeatSpacer={0}
            duration={10000}
            textStyle={[smallBoldText, {color: rubyRed}]}
          />
          <TextScrollableTicker
            message={i18n.logginFullMessageText}
            duration={10000}
            textStyle={smallBoldText}
            isRTL
          />
          <TextScrollableTicker
            message={i18n.logguinScreenSeparator}
            repeatSpacer={0}
            duration={10000}
            textStyle={[smallBoldText, {color: rubyRed}]}
          />
        </View>

        <View style={[styles.preLoginOptionsContainer, {backgroundColor}]}>
          <View
            style={[
              styles.loginOptionsContainer,
              {backgroundColor: halfGhostGreen},
            ]}>
            <GoogleSignin />
          </View>
        </View>

        <View style={[styles.footerContainer, {backgroundColor}]} />

        <Text
          ellipsizeMode="clip"
          style={[bigText, styles.backgroundText, {color: ghostDarkGreen}]}>
          {i18n.logguinScreenSeparator +
            i18n.logguinScreenSeparator +
            i18n.logguinScreenSeparator}
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  backgroundText: {
    position: 'absolute',
    zIndex: -1,
    top: 0,
  },

  preLoginOptionsContainer: {
    flexDirection: 'row',
  },
  loginOptionsContainer: {
    opacity: 0.8,
    flexDirection: 'column',
    marginVertical: 6,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },

  rowContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  bigColumn: {
    zIndex: 1,
    flex: 1,
    flexGrow: 4,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  littleColumn: {
    zIndex: 1,
    flex: 1,
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerContainer: {
    position: 'absolute',
    width: '100%',
    height: '5%',
    bottom: 0,
  },
  headerContainer: {
    position: 'absolute',
    width: '100%',
    height: 100,
    top: 60,
  },
});
