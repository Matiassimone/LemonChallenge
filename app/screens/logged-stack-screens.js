import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {useThemeStorage} from '../store/color-theme-store';
import * as colorThemeSelectors from '../selectors/theme-selectors';

import CountryScreen from './country-screen';
import ConfirmedCasesScreen from './confirmed-cases-screen';
import DashboarScreen from './dashboard-screen';
import SettingsScreen from './settings-screen';

const Tab = createBottomTabNavigator();
Icon.loadFont();

const LoggedStackScreens = () => {
  const backgroundColor = useThemeStorage(colorThemeSelectors.backgroundColor);
  const contrastColor = useThemeStorage(colorThemeSelectors.contrastColor);
  const hightLightAColor = useThemeStorage(
    colorThemeSelectors.hightLightAColor,
  );

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {backgroundColor},
        tabBarActiveTintColor: hightLightAColor,
        tabBarInactiveTintColor: contrastColor,
      }}>
      <Tab.Screen
        name="Country"
        component={CountryScreen}
        options={{
          tabBarLabel: 'Country',
          tabBarIcon: ({size, focused}) => (
            <Icon
              name="earth"
              color={focused ? hightLightAColor : contrastColor}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Confirmed Cases"
        component={ConfirmedCasesScreen}
        options={{
          tabBarLabel: 'Confirmed Cases',
          tabBarIcon: ({size, focused}) => (
            <Icon
              name="virus-outline"
              color={focused ? hightLightAColor : contrastColor}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Dashboard"
        component={DashboarScreen}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({size, focused}) => (
            <Icon
              name="view-dashboard-variant-outline"
              color={focused ? hightLightAColor : contrastColor}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({size, focused}) => (
            <Icon
              name="more"
              color={focused ? hightLightAColor : contrastColor}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default LoggedStackScreens;
