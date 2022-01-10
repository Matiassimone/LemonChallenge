import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import GoogleSignin from '../components/google-signin';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container} />
      <GoogleSignin />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'green'},
});
