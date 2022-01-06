import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {useGoogleSignConfig, useSignIn} from '../services/google-sign-service';

import {GoogleSigninButton} from '@react-native-google-signin/google-signin';

const GoogleSignin = () => {
  return (
    <>
      <GoogleSigninButton
        style={{width: 192, height: 48}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={useSignIn}
        //disabled={this.state.isSigninInProgress}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default GoogleSignin;
