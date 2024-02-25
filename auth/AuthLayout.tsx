import React from "react";
import { Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, Platform } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-color: black;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.Image`
  max-width: 80%;
  width: 100%;
  height: 150px;
  margin: 0 auto;
`;

export default function AuthLayout({ children }: any) {
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback style={{ height: "100%" }} onPress={dismissKeyboard} disabled={Platform.OS === "web"}>
      <Container>
        <KeyboardAvoidingView
          behavior="padding"
          keyboardVerticalOffset={Platform.OS === "ios" ? 30 : 50}
          style={{
            width: "100%",
            flex: 1,
            justifyContent: "center",
          }}
        >
          <Logo resizeMode="center" source={require("../assets/logo.png")} />
          {children}
        </KeyboardAvoidingView>
      </Container>
    </TouchableWithoutFeedback>
  );
}
