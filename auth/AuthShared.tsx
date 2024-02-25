import styled from "styled-components/native";

export const TextInputContainer = styled.TextInput`
  background-color: rgba(255, 255, 255, 0.15);
  padding: 15px 10px;
  margin-bottom: ${(props: any) => (props?.lastOne ? 15 : 8)}px;
  border-radius: 5px;
  color: white;
`;

// 많이 쓰이는 TextInput 스타일 따로 뺴놓은 컴포넌트
