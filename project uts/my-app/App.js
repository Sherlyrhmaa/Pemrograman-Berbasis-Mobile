import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screen/home';
import KataBijak from './screen/katabijak';
import DoaHarian from './screen/doaharian';
import AmalanHarian from './screen/amalanharian';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Cahaya Hati">
        <Stack.Screen name="Cahaya Hati" component={Home} />
        <Stack.Screen name="Kata Bijak" component={KataBijak} />
        <Stack.Screen name="Doa Harian" component={DoaHarian} />
        <Stack.Screen name="Amalan Harian" component={AmalanHarian} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
