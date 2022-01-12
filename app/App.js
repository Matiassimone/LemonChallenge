import React, {useEffect} from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {useSignStore} from './store/sign-store';
import * as signSelectors from './selectors/sign-selectors';

import LoggedStackScreens from './screens/logged-stack-screens';
import UnloggedStackScreens from './screens/unlogged-stack-screens';

import {useInitAllStorages} from './helpers/app-helper';

const Stack = createNativeStackNavigator();

const App = () => {
  useInitAllStorages();

  const isSignedIn = useSignStore(signSelectors.signed);

  return (
    <SafeAreaProvider style={styles.container}>
      <StatusBar hidden />
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
