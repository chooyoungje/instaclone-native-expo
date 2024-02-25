import React, { RefObject, useRef, useEffect } from "react";
import AuthLayout from "../auth/AuthLayout";
import AuthButton from "../auth/AuthButton";
import { TextInput } from "react-native";
import { TextInputContainer } from "../auth/AuthShared";
import { useForm } from "react-hook-form";

export default function CreateAccount() {
  const lastNameRef = useRef<TextInput | null>(null);
  const userNameRef = useRef<TextInput | null>(null);
  const emailRef = useRef<TextInput | null>(null);
  const passwordRef = useRef<TextInput | null>(null);

  const { register, handleSubmit, setValue } = useForm();

  const onNext = (nextOne: RefObject<TextInput>): void => {
    nextOne?.current?.focus();
  };

  const onValid = (data: any) => {
    console.log(data);
  };

  useEffect(() => {
    register("firstName");
    register("lastName");
    register("username");
    register("email");
    register("password");
  }, [register]);

  return (
    <AuthLayout>
      <TextInputContainer
        placeholder="First Name"
        placeholderTextColor="gray"
        returnKeyType="next"
        onSubmitEditing={() => onNext(lastNameRef)}
        onChangeText={(text: string) => setValue("firstName", text)}
      />

      <TextInputContainer
        ref={lastNameRef}
        placeholder="Last Name"
        placeholderTextColor="gray"
        returnKeyType="next"
        onSubmitEditing={() => onNext(userNameRef)}
        onChangeText={(text: string) => setValue("lastName", text)}
      />

      <TextInputContainer
        ref={userNameRef}
        placeholder="Username"
        placeholderTextColor="gray"
        returnKeyType="next"
        onSubmitEditing={() => onNext(emailRef)}
        autoCapitalize={"none"}
        onChangeText={(text: string) => setValue("username", text)}
      />

      <TextInputContainer
        ref={emailRef}
        keyboardType="email-address"
        placeholder="Email"
        placeholderTextColor="gray"
        returnKeyType="next"
        onSubmitEditing={() => onNext(passwordRef)}
        autoCapitalize={"none"}
        onChangeText={(text: string) => setValue("email", text)}
      />

      <TextInputContainer
        ref={passwordRef}
        secureTextEntry
        placeholder="Password"
        returnKeyType="done"
        placeholderTextColor="gray"
        lastOne={true}
        autoCapitalize={"none"}
        onChangeText={(text: string) => setValue("password", text)}
        onSubmitEditing={handleSubmit(onValid)}
      />
      <AuthButton text="Create Account" disabled={false} onPress={handleSubmit(onValid)} />
    </AuthLayout>
  );
}
