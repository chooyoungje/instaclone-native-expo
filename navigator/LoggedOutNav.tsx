import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Welcome from "../screens/Welcome";
import Login from "../screens/Login";
import CreateAccount from "../screens/CreateAccount";

const Stack = createStackNavigator();
// 스택은 바깥에 만들어야함

export default function LoggedOutNav() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: true,
        headerTintColor: "blue",
      }}
    >
      <Stack.Screen name="welcome" component={Welcome} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="createAccount" component={CreateAccount} />
    </Stack.Navigator>
  );
}
