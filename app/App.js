import React, {useState, useEffect} from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {useSignStore} from './store/sign-store';
import * as signSelectors from './selectors/sign-selectors';

import LoggedStackScreens from './screens/logged-stack-screens';
import UnloggedStackScreens from './screens/unlogged-stack-screens';

const Stack = createNativeStackNavigator();

const App = () => {
  const fetchStorageData = useSignStore(signSelectors.fetchStorageData);
  const googleSignConfig = useSignStore(signSelectors.googleSignConfig);

  useEffect(() => {
    fetchStorageData();
    googleSignConfig();
  }, [fetchStorageData, googleSignConfig]);

  const isSignedIn = useSignStore(signSelectors.signed);

  return (
    <SafeAreaProvider style={styles.container}>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator>
          {isSignedIn ? (
            <Stack.Screen
              name="LoggedStackScreens"
              component={LoggedStackScreens}
              options={{headerShown: false}}
            />
          ) : (
            <Stack.Screen
              name="UnloggedStackScreens"
              component={UnloggedStackScreens}
              options={{headerShown: false}}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
