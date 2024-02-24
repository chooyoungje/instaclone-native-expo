import React from "react";
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
`;
// web애서 보이게 할려면 widhth를 설정해줘야함
// max-width => 핸드폰
export default function AuthLayout({ children }: any) {
  return (
    <Container>
      <Logo resizeMode="center" source={require("../assets/logo.png")} />
      {children}
    </Container>
  );
}
