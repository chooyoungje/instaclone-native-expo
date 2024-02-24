import React, { RefObject, useRef } from "react";
import styled from "styled-components/native";
import AuthLayout from "../auth/AuthLayout";
import AuthButton from "../auth/AuthButton";

import { KeyboardAvoidingView, TextInput, Platform } from "react-native";

export default function CreateAccount() {
  const lastNameRef = useRef<TextInput | null>(null);
  // TestInput ref={}에서 오류가 날시 기본값을 null로 주면 해결

  const userNameRef = useRef<TextInput | null>(null);
  const emailRef = useRef<TextInput | null>(null);
  const passwordRef = useRef<TextInput | null>(null);

  const onNext = (nextOne: RefObject<TextInput>): void => {
    nextOne?.current?.focus();
    // 실제로 연결될 컴포넌트를 알려줌
    // nextOne으로 다음에 연결하여 focus할 컴포넌트를 가져온다
  };

  const onDone = () => {
    alert("Done");
  };
  return (
    <AuthLayout>
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={Platform.OS === "ios" ? 30 : 50}
        style={{
          width: "100%",
        }}
      >
        <TextInput
          placeholder="First Name"
          placeholderTextColor="gray"
          style={{ backgroundColor: "white", width: "100%" }}
          returnKeyType="next"
          onSubmitEditing={() => onNext(lastNameRef)}
        />

        <TextInput
          ref={lastNameRef}
          placeholder="Last Name"
          placeholderTextColor="gray"
          style={{ backgroundColor: "white", width: "100%" }}
          returnKeyType="next"
          onSubmitEditing={() => onNext(userNameRef)}
        />

        <TextInput
          ref={userNameRef}
          placeholder="Username"
          placeholderTextColor="gray"
          style={{ backgroundColor: "white", width: "100%" }}
          returnKeyType="next"
          onSubmitEditing={() => onNext(emailRef)}
        />

        <TextInput
          ref={emailRef}
          keyboardType="email-address"
          placeholder="Email"
          placeholderTextColor="gray"
          style={{ backgroundColor: "white", width: "100%" }}
          returnKeyType="next"
          onSubmitEditing={() => onNext(passwordRef)}
        />

        <TextInput
          ref={passwordRef}
          secureTextEntry
          placeholder="Password"
          placeholderTextColor="gray"
          style={{ backgroundColor: "white", width: "100%" }}
          returnKeyType="done"
          onSubmitEditing={onDone}
        />
        <AuthButton text="Create Account" disabled={true} onPress={() => null} />
      </KeyboardAvoidingView>
    </AuthLayout>
  );
}
