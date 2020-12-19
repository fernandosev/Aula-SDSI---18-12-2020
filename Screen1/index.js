import React, { useState } from "react";
import { Container } from "./styles";

import Square from "../components/Square";
import Input from "../components/Input";
import Button from "../components/Button";
import { Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setText, newClick } from "../testRedux/actions";

export default function App({ navigation }) {
  const dispatch = useDispatch();
  const { text, clicksRedux } = useSelector((state) => state.test);
  const [clicks, setClicks] = useState(0);

  return (
    <Container>
      <Square color="#00FF00" />
      <Input title="Usuário" />
      <Input title="Senha" />
      <Button onPress={() => dispatch(newClick())} />
      <Text>{clicksRedux}</Text>
    </Container>
  );
}
