import React from "react";
import styled from "styled-components/native";
import { colors } from "../color";
import { ActivityIndicator } from "react-native";

const Button = styled.TouchableOpacity`
  background-color: ${colors.blue};
  padding: 15px 10px;
  border-radius: 5px;
  width: 100%;
  opacity: ${(props: any) => (props?.disabled ? "0.5" : "1")};
`;

const ButtonText = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 14px;
  text-align: center;
`;

export default function AuthButton({ onPress, disabled, text, loading }: any) {
  return (
    <Button disabled={disabled} onPress={onPress}>
      {loading ? <ActivityIndicator color="white" /> : <ButtonText>{text}</ButtonText>}
    </Button>
  );
}
