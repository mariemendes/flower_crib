import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colors } from '../components/styles';

//screens
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Welcome from '../screens/Welcome';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: 'transparent'
        },
        // cardStyle: { backgroundColor: 'white' },
        headerTintColor: Colors.tertiary,
        headerTransparent: true,
        headerTitle: '',
      }}
      initialRouteName='Login'
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen options={{headerTintColor: Colors.primary}}name="Welcome" component={Welcome} />
      </Stack.Navigator>
   </NavigationContainer>
  );
}

export default RootStack;
