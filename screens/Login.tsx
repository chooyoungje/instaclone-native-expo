import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
export default function Login({ navigation }: any) {
  return (
    <View>
      <Text>Login</Text>
      <TouchableOpacity onPress={() => navigation.navigate("createAccount")}>
        <View>
          <Text>Go to Create Account</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
