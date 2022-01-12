import React from 'react';
import {StyleSheet} from 'react-native';

import {useSignStore} from '../store/sign-store';
import {useSignIn, signinInProgress} from '../selectors/sign-selectors';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {GoogleSigninButton} from '@react-native-google-signin/google-signin';

Icon.loadFont();

const GoogleSignin = ({type = 'Standard'}) => {
  const signIn = useSignStore(useSignIn);
  const isSigninInProgress = useSignStore(signinInProgress);

  return (
    <GoogleSigninButton
      style={styles.button}
      size={GoogleSigninButton.Size[type]}
      color={GoogleSigninButton.Color.Light}
      onPress={() => signIn()}
      disabled={isSigninInProgress}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    marginVertical: 20,
    marginHorizontal: 20,
    height: 52,
    borderRadius: 10,
  },
});

export default GoogleSignin;
