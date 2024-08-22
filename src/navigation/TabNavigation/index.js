import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigation} from 'react-native-paper';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {CommonActions} from '@react-navigation/native';

import Routes from '../Routes';
import Home from '../../screens/home';
import Search from '../../screens/search';
import Notification from '../../screens/notification';
import Profile from '../../screens/profile';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={({navigation, state, descriptors, insets}) => (
        <BottomNavigation.Bar
          navigationState={state}
          safeAreaInsets={insets}
          onTabPress={({route, preventDefault}) => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (event.defaultPrevented) {
              preventDefault();
            } else {
              navigation.dispatch({
                ...CommonActions.navigate(route.name, route.params),
                target: state.key,
              });
            }
          }}
          renderIcon={({route, focused, color}) => {
            const {options} = descriptors[route.key];
            if (options.tabBarIcon) {
              return options.tabBarIcon({focused, color, size: 24});
            }

            return null;
          }}
          getLabelText={({route}) => {
            const {options} = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.title;

            return label;
          }}
        />
      )}>
      {/* Home screen  */}
      <Tab.Screen
        name={Routes.HOME}
        component={Home}
        options={{
          tabBarBackground: 'red',
          tabBarStyle: {backgroundColor: 'black'},
          tabBarIcon: ({color, size}) => {
            return <Octicons name="home" size={size} color={color} />;
          },
        }}
      />

      {/* Search screen */}
      <Tab.Screen
        name={Routes.SEARCH}
        component={Search}
        options={{
          tabBarBackground: 'red',
          tabBarStyle: {backgroundColor: 'black'},
          tabBarIcon: ({color, size}) => {
            return <Octicons name="search" size={size} color={color} />;
          },
        }}
      />
      {/* notification screen */}
      <Tab.Screen
        name={Routes.NOTIFICATION}
        component={Notification}
        options={{
          tabBarBackground: 'red',
          tabBarStyle: {backgroundColor: 'black'},
          tabBarIcon: ({color, size}) => {
            return <Octicons name="bell" size={size} color={color} />;
          },
        }}
      />
      {/* profile screen */}
      <Tab.Screen
        name={Routes.PROFILE}
        component={Profile}
        options={{
          tabBarBackground: 'red',
          tabBarStyle: {backgroundColor: 'black'},
          tabBarIcon: ({color, size}) => {
            return <FontAwesome5 name="award" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
