import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {PaperProvider} from 'react-native-paper';
import TabNavigation from './src/navigation/TabNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Routes from './src/navigation/Routes';

import Home from './src/screens/home';
import Login from './src/screens/login';
import PodcastDetails from './src/screens/podcastDetails';
import PodcastInformation from './src/components/podcastInformation';
import EpisodePlayer from './src/components/episodePlayer';
const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <PaperProvider>
          <Stack.Navigator initialRouteName={Routes.LOGIN}>
            <Stack.Screen
              name={Routes.TABNAVIGATOR}
              component={TabNavigation}
              options={{
                headerShown: false,
              }}
            />

            {/* LOGIN Screen */}
            <Stack.Screen
              name={Routes.LOGIN}
              component={Login}
              options={{
                headerShown: false,
              }}
            />

            {/* PODCASTDETAILS Screen */}
            <Stack.Screen
              name={Routes.PODCASTDETAILS}
              component={PodcastDetails}
              options={{
                headerShown: false,
              }}
            />

            {/* PodcastInformation Screen */}
            <Stack.Screen
              name={Routes.PODCASTINFORMATION}
              component={PodcastInformation}
              options={{
                headerShown: false,
              }}
            />
            {/* EpisodePlayer Screen */}
            <Stack.Screen
              name={Routes.EPISODEPLAYER}
              component={EpisodePlayer}
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
