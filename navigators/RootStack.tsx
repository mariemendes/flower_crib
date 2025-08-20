import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Colors } from "../components/styles";

// screens
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import Welcome from "../screens/Welcome";

const Stack = createNativeStackNavigator();

const RootStack = ({ user }) => {
  return (
    <NavigationContainer>
<Stack.Navigator
  screenOptions={{
    headerStyle: { backgroundColor: "transparent" },
    headerTintColor: Colors.tertiary,
    headerTransparent: true,
    headerTitle: "",
  }}
  initialRouteName={user ? "Welcome" : "Login"}
>
  <Stack.Screen name="Login" component={Login} />
  <Stack.Screen name="Signup" component={Signup} />
  <Stack.Screen
    name="Welcome"
    component={Welcome}
    initialParams={user}
    options={{ headerTintColor: Colors.primary }}
  />
</Stack.Navigator>

    </NavigationContainer>
  );
};

export default RootStack;
