import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

import {useThemeStorage} from '../store/color-theme-store';
import * as colorThemeSelectors from '../selectors/theme-selectors';

import {useSignStore} from '../store/sign-store';
import * as signSelectors from '../selectors/sign-selectors';

import {smallBoldText, smallText} from '../constants/text-styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

Icon.loadFont();

const LogoutButton = () => {
  const signOut = useSignStore(signSelectors.useSignOut);

  const email = useSignStore(signSelectors.userEmail);
  const profilePhotoUri = useSignStore(signSelectors.userPhoto);
  const userName = useSignStore(signSelectors.userName);

  const backgroundColor = useThemeStorage(colorThemeSelectors.backgroundColor);
  const contrastColor = useThemeStorage(colorThemeSelectors.contrastColor);

  return (
    <View style={[styles.logOutContainer, {backgroundColor: contrastColor}]}>
      <Image
        style={styles.profileImage}
        source={{
          uri: profilePhotoUri,
        }}
      />

      <View>
        <Text style={smallBoldText}>{userName}</Text>
        <Text style={smallText}>{email}</Text>
      </View>

      <TouchableOpacity
        onPress={signOut}
        style={styles.button}
        hitSlop={{
          bottom: 50,
          left: 20,
          right: 20,
          top: 50,
        }}>
        <Icon name="logout-variant" color={backgroundColor} size={36} />
      </TouchableOpacity>
    </View>
  );
};

export default LogoutButton;

const styles = StyleSheet.create({
  logOutContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  profileImage: {
    marginHorizontal: 20,
    marginVertical: 10,
    width: 58,
    height: 58,
    borderRadius: 50,
  },
  button: {
    marginHorizontal: 20,
    flex: 1,
    alignItems: 'flex-end',
  },
});
