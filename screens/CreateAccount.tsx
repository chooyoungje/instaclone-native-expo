import React, { useRef } from "react";
import styled from "styled-components/native";
import AuthLayout from "../auth/AuthLayout";
import AuthButton from "../auth/AuthButton";

import { TextInput } from "react-native";

export default function CreateAccount() {
  const lastNameRef = useRef<HTMLInputElement>(null);
  // TestInput ref={}에서 오류가 날시 기본값을 null로 주면 해결

  const onFirstNameNext = (nextRef: any) => {
    lastNameRef?.current?.focus();
    // 실제로 연결된 컴포넌트를 알려줌
  };
  return (
    <AuthLayout>
      <TextInput
        placeholder="First Name"
        placeholderTextColor="gray"
        style={{ backgroundColor: "white", width: "100%" }}
        returnKeyType="next"
        onSubmitEditing={onFirstNameNext}
      />

      <TextInput
        ref={lastNameRef}
        placeholder="Last Name"
        placeholderTextColor="gray"
        style={{ backgroundColor: "white", width: "100%" }}
        returnKeyType="next"
      />

      <TextInput
        placeholder="Username"
        placeholderTextColor="gray"
        style={{ backgroundColor: "white", width: "100%" }}
        returnKeyType="next"
      />

      <TextInput
        keyboardType="email-address"
        placeholder="Email"
        placeholderTextColor="gray"
        style={{ backgroundColor: "white", width: "100%" }}
        returnKeyType="next"
      />

      <TextInput
        secureTextEntry
        placeholder="Password"
        placeholderTextColor="gray"
        style={{ backgroundColor: "white", width: "100%" }}
        returnKeyLabel="Create Account"
      />
      <AuthButton text="Create Account" disabled={true} onPress={() => null} />
    </AuthLayout>
  );
}
