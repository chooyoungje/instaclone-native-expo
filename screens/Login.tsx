import React, { RefObject, useEffect, useRef } from "react";
import AuthLayout from "../auth/AuthLayout";
import AuthButton from "../auth/AuthButton";
import { TextInput } from "react-native";
import { TextInputContainer } from "../auth/AuthShared";
import { useForm } from "react-hook-form";

export default function Login({ navigation }: any) {
  const passwordRef = useRef<TextInput | null>(null);

  const { register, handleSubmit, setValue } = useForm();

  const onValid = (data: any) => {
    console.log(data);
  };
  const onNext = (nextOne: RefObject<TextInput>): void => {
    nextOne?.current?.focus();
  };
  useEffect(() => {
    register("username");
    register("password");
    // react에서와 다르게 TextInput에서 register를 안 한다
  }, [register]);
  // 한번만 실행하거나 register가 바뀌면 실행될 것임
  return (
    <AuthLayout>
      <TextInputContainer
        placeholder="Username"
        placeholderTextColor="gray"
        returnKeyType="next"
        onSubmitEditing={() => onNext(passwordRef)}
        onChangeText={(text: string) => setValue("username", text)}
        autoCapitalize={"none"}
      />

      <TextInputContainer
        ref={passwordRef}
        secureTextEntry
        placeholder="Password"
        returnKeyType="done"
        onSubmitEditing={handleSubmit(onValid)}
        placeholderTextColor="gray"
        lastOne={true}
        autoCapitalize={"none"}
        onChangeText={(text: string) => setValue("password", text)}
      />
      <AuthButton text="Log In" disabled={false} onPress={handleSubmit(onValid)} />
    </AuthLayout>
  );
}
