import React from "react";
import styled from "styled-components/native";
import { colors } from "../color";
import { TouchableOpacity } from "react-native";
import AuthButton from "../auth/AuthButton";
import AuthLayout from "../auth/AuthLayout";

const LoginLink = styled.Text`
  color: ${colors.blue};
  font-weight: 600;
  margin-top: 12px;
`;

export default function Welcome({ navigation }: any) {
  const goToCreateAccount = () => navigation.navigate("createAccount");
  const goToLogin = () => navigation.navigate("login");
  return (
    <AuthLayout>
      <AuthButton disabled={false} onPress={goToCreateAccount} text="Create New Account" />

      <TouchableOpacity onPress={goToLogin}>
        <LoginLink>Log in</LoginLink>
      </TouchableOpacity>
    </AuthLayout>
  );
}

// resizeMode="center" 로고를 어디다 놓을 건지 정할 수 있는 속성
// 리액트 네이티브에서 모든 flex 컨테이너는 기본적으로 flex direction이 column임
// web에서는 기본값이 row임
