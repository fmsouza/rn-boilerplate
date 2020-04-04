import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { withProviders } from '~/shared/utils';

import { HomeProvider } from '../state';

import { HomeScreen } from './HomeScreen';
import { SecondScreen } from './SecondScreen';

const ROUTE_NAME = 'home';

const initialScreen = HomeScreen;

const screens = [HomeScreen, SecondScreen];

const Stack = createStackNavigator();

export const HomeNavigator = withProviders([HomeProvider], (props) => (
  <Stack.Navigator name={ROUTE_NAME} initialRouteName={initialScreen.route}>
    {screens.map((screen) => (
      <Stack.Screen
        key={screen.route}
        name={screen.route}
        component={screen}
        options={{ ...screen.options }}
      />
    ))}
  </Stack.Navigator>
));

HomeNavigator.route = ROUTE_NAME;
