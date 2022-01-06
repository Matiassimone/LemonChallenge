import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from './login-screen';

const Stack = createNativeStackNavigator();

const UnloggedStackScreens = () => {
  return <Stack.Screen name="Login" component={LoginScreen} />;
};

export default UnloggedStackScreens;

const styles = StyleSheet.create({});
