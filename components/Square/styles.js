import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 70px;
  height: 67px;
  background-color: ${(props) =>
    props.background ? props.background : "#C4C4C4"};
`;
