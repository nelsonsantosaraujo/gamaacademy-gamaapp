import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import Accenture from './screens/Accenture';

import Header from './components/Header';
import Contact from './screens/Contact';
import AppCamera from './screens/Camera';
import AsyncStorageScreen from './screens/AsyncStorage';

const { Navigator, Screen } = createStackNavigator(); 

export default function Route() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {
            backgroundColor: '#f2f2f2'
          }
        }}
      >
        <Screen 
          name="home"
          component={Home}
        />
        <Screen
          name="accenture"
          component={Accenture}
          options={{
            headerShown: true,
            header: () => <Header title="Accenture" showCancel={false} />,
          }}
        />
        <Screen
          name="contact"
          component={Contact}
          options={{
            headerShown: true,
            header: () => <Header title="Contact" showCancel={true} />,
          }}
        />
        <Screen
          name="camera"
          component={AppCamera}
          options={{
            headerShown: true,
            header: () => <Header title="Camera" showCancel={false} />,
          }}
        />
        <Screen
          name="storage"
          component={AsyncStorageScreen}
          options={{
            headerShown: true,
            header: () => <Header title="Storage" showCancel={false} />,
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}