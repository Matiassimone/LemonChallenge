import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import CountryScreen from './country-screen';
import ConfirmedCasesScreen from './confirmed-cases-screen';
import DashboarScreen from './dashboard-screen';
import AboutScreen from './about-screen';

const Tab = createBottomTabNavigator();
Icon.loadFont();

const LoggedStackScreens = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        //tabBarStyle: {backgroundColor: ''},
      }}>
      <Tab.Screen
        name="Country"
        component={CountryScreen}
        options={{
          tabBarLabel: 'Country',
          tabBarIcon: ({color, size, focused}) => (
            <Icon name="earth" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Confirmed Cases"
        component={ConfirmedCasesScreen}
        options={{
          tabBarLabel: 'Confirmed Cases',
          tabBarActiveTintColor: '',
          tabBarInactiveTintColor: '',
          tabBarIcon: ({color, size, focused}) => (
            <Icon name="virus-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Dashboard"
        component={DashboarScreen}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({color, size, focused}) => (
            <Icon
              name="view-dashboard-variant-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={AboutScreen}
        options={{
          tabBarLabel: 'About',
          tabBarIcon: ({color, size, focused}) => (
            <Icon name="more" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default LoggedStackScreens;

const styles = StyleSheet.create({});
