import React from "react";
import { Container } from "./styles";

export default function Button({ color = "#C4C4C4", ...props }) {
  return <Container background={color} />;
}
