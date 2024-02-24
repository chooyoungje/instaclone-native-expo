import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Welcome from "../screens/Welcome";
import Login from "../screens/Login";
import CreateAccount from "../screens/CreateAccount";

const Stack = createStackNavigator();

export default function LoggedOutNav() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: true,
        headerTintColor: "blue",
      }}
      initialRouteName="welcome"
    >
      <Stack.Screen options={{ headerShown: false }} name="welcome" component={Welcome} />
      <Stack.Screen options={{ headerShown: false }} name="login" component={Login} />
      <Stack.Screen
        options={{
          headerTitle: () => false,
          headerTransparent: true,
          // 헤더가 있지만 보여주진 않는다
          headerTintColor: "white",
        }}
        name="createAccount"
        component={CreateAccount}
      />
    </Stack.Navigator>
  );
}
