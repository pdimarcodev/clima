import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import theme from '../theme';
import Icon from 'react-native-vector-icons/Ionicons';
import {ListTab} from './listTab';
import {SearchTab} from './searchTab';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: theme.colors.bg.primary,
      }}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.text.tertiary,
        tabBarLabelStyle: {marginBottom: 10},
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: 'rgba(255,255,255,0.82)',
          paddingBottom: 10,
          borderWidth: 0,
          elevation: 0,
          height: 60,
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={ListTab}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => (
            <Icon color={color} size={30} name="list-outline" />
          ),
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchTab}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => (
            <Icon color={color} size={30} name="search-outline" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
