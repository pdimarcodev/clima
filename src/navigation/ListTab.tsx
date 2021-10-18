import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {DetailScreen, HomeScreen} from '../screens';
import {City} from '../interfaces/City';
import theme from '../theme';

export type RootStackParams = {
  HomeScreen: undefined;
  DetailScreen: City;
  SearchScreen: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const ListTab = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: theme.colors.bg.primary,
        },
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
};
