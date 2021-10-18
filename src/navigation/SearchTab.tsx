import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {DetailScreen, SearchScreen} from '../screens';
import theme from '../theme';
import {RootStackParams} from './listTab';

const Stack = createStackNavigator<RootStackParams>();

export const SearchTab = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: theme.colors.bg.primary,
        },
      }}>
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
};
