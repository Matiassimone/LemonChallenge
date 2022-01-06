import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  useGoogleSignConfig,
  useIsSignedIn,
} from './services/google-sign-service';

import LoggedStackScreens from './screens/logged-stack-screens';
import UnloggedStackScreens from './screens/unlogged-stack-screens';

const Stack = createNativeStackNavigator();

const App = () => {
  useGoogleSignConfig();
  const isSignedIn = useIsSignedIn();

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
