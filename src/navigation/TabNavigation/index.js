import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigation} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {CommonActions} from '@react-navigation/native';

import Routes from '../Routes';
import Home from '../../screens/home';

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
      <Tab.Screen
        name={Routes.HOME}
        component={Home}
        options={{
          tabBarLabel: 'Task',
          tabBarBackground: 'red',
          tabBarStyle: {backgroundColor: 'black'},
          tabBarIcon: ({color, size}) => {
            return <MaterialIcons name="home" size={size} color={color} />;
          },
        }}
      />
      {/* <Tab.Screen
        name={Routes.CALENDAR}
        component={Calendar}
        options={{
          tabBarLabel: 'Calendar',
          tabBarBackground: 'red',
          tabBarStyle: {backgroundColor: 'black'},
          tabBarIcon: ({color, size}) => {
            return <Icon name="calendar" size={size} color={color} />;
          },
        }}
      /> */}
      {/* <Tab.Screen
        name={Routes.MINE}
        component={Mine}
        options={{
          tabBarLabel: 'Mine',
          tabBarBackground: 'red',
          tabBarStyle: {backgroundColor: 'black'},
          tabBarIcon: ({color, size}) => {
            return <Icon name="face-man-profile" size={size} color={color} />;
          },
        }}
      /> */}
    </Tab.Navigator>
  );
}
