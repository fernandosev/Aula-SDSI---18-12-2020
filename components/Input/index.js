import React from "react";
import { useSelector } from "react-redux";
import { Container, InputContainer, Title, InputC } from "./styles";

export default function Input({ title }) {
  const { text } = useSelector((state) => state.test);
  return (
    <Container>
      <InputContainer>
        <Title>{text}</Title>
        <InputC />
      </InputContainer>
    </Container>
  );
}
