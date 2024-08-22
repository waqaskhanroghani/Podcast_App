import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {PaperProvider} from 'react-native-paper';
import TabNavigation from './src/navigation/TabNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Routes from './src/navigation/Routes';

import Home from './src/screens/home';
const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <PaperProvider>
          <Stack.Navigator>
            <Stack.Screen
              name={Routes.TABNAVIGATOR}
              component={TabNavigation}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name={Routes.TASKDETAILS}
              component={Home}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </PaperProvider>
      </NavigationContainer>
    </SafeAreaView>
  );
}
