import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import GoogleSignin from '../components/google-signin';

const LoginScreen = () => {
  return (
    <View>
      <GoogleSignin />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
