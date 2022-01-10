import React from 'react';
import {StyleSheet} from 'react-native';

import {useSignStore} from '../store/sign-store';
import {useSignIn, signinInProgress} from '../selectors/sign-selectors';

import {GoogleSigninButton} from '@react-native-google-signin/google-signin';

const GoogleSignin = () => {
  const signIn = useSignStore(useSignIn);
  const isSigninInProgress = useSignStore(signinInProgress);

  return (
    <GoogleSigninButton
      style={styles.button}
      size={GoogleSigninButton.Size.Wide}
      color={GoogleSigninButton.Color.Dark}
      onPress={() => signIn()}
      disabled={isSigninInProgress}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    width: 192,
    height: 48,
  },
});

export default GoogleSignin;
