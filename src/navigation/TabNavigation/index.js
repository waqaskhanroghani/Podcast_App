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
import Colors from '../../config/colors';
import PodcastDetails from '../../screens/podcastDetails';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName={Routes.PODCASTDETAILS}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primaryColor,
        tabBarInactiveTintColor: Colors.textColorSecondary,
        tabBarStyle: {
          backgroundColor: Colors.backgroundColor,
        },
      }}
      tabBar={({navigation, state, descriptors, insets}) => (
        <BottomNavigation.Bar
          style={{
            backgroundColor: Colors.backgroundColor,
          }}
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
          tabBarIcon: ({color, size, focused}) => {
            const iconColor = focused ? '#00ADB5' : '#5B7083';
            return <Octicons name="home" size={size} color={iconColor} />;
          },
        }}
      />

      {/* Search screen */}
      <Tab.Screen
        name={Routes.SEARCH}
        component={Search}
        options={{
          tabBarIcon: ({color, size, focused}) => {
            const iconColor = focused ? '#00ADB5' : '#5B7083';
            return <Octicons name="search" size={size} color={iconColor} />;
          },
        }}
      />

      {/* Notification screen */}
      <Tab.Screen
        name={Routes.NOTIFICATION}
        component={Notification}
        options={{
          tabBarIcon: ({color, size, focused}) => {
            const iconColor = focused ? '#00ADB5' : '#5B7083';
            return <Octicons name="bell" size={size} color={iconColor} />;
          },
        }}
      />

      {/* Profile screen */}
      <Tab.Screen
        name={Routes.PROFILE}
        component={Profile}
        options={{
          tabBarIcon: ({color, size, focused}) => {
            const iconColor = focused ? '#00ADB5' : '#5B7083';
            return <FontAwesome5 name="award" size={size} color={iconColor} />;
          },
        }}
      />
      {/* PodcastDetails screen */}
      {/* <Tab.Screen
        name={Routes.PODCASTDETAILS}
        component={PodcastDetails}
        options={{
          tabBarIcon: ({color, size, focused}) => {
            const iconColor = focused ? '#00ADB5' : '#5B7083';
            return <FontAwesome5 name="award" size={size} color={iconColor} />;
          },
        }}
      /> */}
    </Tab.Navigator>
  );
}
