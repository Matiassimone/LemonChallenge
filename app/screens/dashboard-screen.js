import React from 'react';
import {StyleSheet, View, SafeAreaView, ActivityIndicator} from 'react-native';

import {WebView} from 'react-native-webview';

import {useThemeStorage} from '../store/color-theme-store';
import * as colorThemeSelectors from '../selectors/theme-selectors';

import TextScrollableTicker from '../components/text-scrollable-ticker';

import {EMBED_HOPKINS_MAP} from '../constants/endpoints';

import {mediumBoldText} from '../constants/text-styles';

import i18n from '../i18n/default';

const DashboardScreen = () => {
  const sysTheme = useThemeStorage(colorThemeSelectors.sysTheme);

  const backgroundColor = useThemeStorage(colorThemeSelectors.backgroundColor);
  const hightLightAColor = useThemeStorage(
    colorThemeSelectors.hightLightAColor,
  );

  const queryParamExtent = '97.3846,11.535,163.5174,52.8632';
  const queryParamZoom = 'true';
  const queryParamTheme = sysTheme.toLowerCase();

  const source = EMBED_HOPKINS_MAP.GET_MAP_URI(
    queryParamExtent,
    queryParamZoom,
    queryParamTheme,
  );

  return (
    <View style={[styles.container, {backgroundColor}]}>
      <SafeAreaView style={[styles.fixLogoHidden, {backgroundColor}]}>
        <TextScrollableTicker
          message={i18n.dashboardCases}
          textStyle={[mediumBoldText, {color: hightLightAColor}, styles.header]}
          duration={5000}
        />
      </SafeAreaView>

      <WebView
        style={{
          borderColor: backgroundColor,
          backgroundColor,
        }}
        containerStyle={[
          styles.fixLogoHidden,
          {
            borderColor: backgroundColor,
            backgroundColor,
          },
        ]}
        onShouldStartLoadWithRequest={request =>
          request.url.startsWith(EMBED_HOPKINS_MAP.BASE_MAP_URI) ? true : false
        }
        startInLoadingState={true}
        renderLoading={() => (
          <View style={[styles.loadingContainer, {backgroundColor}]}>
            <ActivityIndicator color={hightLightAColor} size="large" />
          </View>
        )}
        originWhitelist={['*']}
        source={{
          uri: source,
        }}
      />
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fixLogoHidden: {
    bottom: -50,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  header: {
    paddingBottom: 20,
  },
});
