import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function Welcome({ navigation }: any) {
  return (
    <View>
      <Text>Welcome</Text>
      <TouchableOpacity onPress={() => navigation.navigate("createAccount")}>
        <View>
          <Text>Go to Create Account</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("login")}>
        <View>
          <Text>Go to Login</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

// View = div, Text = span
//TouchableOpacity
// 터치했을 때 투명도(Opacity)가 변하게 됨
// onPress 속성 : 눌렀을 떄 실행할 함수 정하기
// <TouchableOpacity onPress={() => navigation.navigate("CreateAccount")}>
// 눌렀을 때 어디로가라고 지정해주기,
// <Stack.Screen name="welcome" component={Welcome} /> 여기 이름과 같아야함
// CreateAccount는 스크린 컴포넌트임,
// 그래서 네비게이션 속성도 가짐 => Welcome(navigation: any)
