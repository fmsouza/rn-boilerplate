import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';

import { HomeNavigator } from '~/home/screens';
import theme from '~/theme';

export const initialScreen = HomeNavigator.route;

const Stack = createStackNavigator();

export const App = () => (
  <NavigationContainer>
    <PaperProvider theme={theme}>
      <Stack.Navigator initialRouteName={initialScreen.route} headerMode="none">
        <Stack.Screen name={HomeNavigator.route} component={HomeNavigator} />
      </Stack.Navigator>
    </PaperProvider>
  </NavigationContainer>
);
