import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
export default function CreateAccount({ navigation }: any) {
  return (
    <View>
      <Text>CreateAccount</Text>
      <TouchableOpacity onPress={() => navigation.navigate("login")}>
        <View>
          <Text>Go to Login</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
