import styled from "styled-components";
import { Block, Item, Title } from "./components";
import "./css/index.css"

const WrapperSld = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`;

function App() {
  return (
    <WrapperSld>
      <Block>
        <Title> Regiões</Title>
        <Item>Centro Oeste</Item>
        <Item>AAAAA</Item>
      </Block>
      <Block>
        <Title> Estados</Title>
      </Block>
      <Block>
        <Title> Mesorregiões</Title>
      </Block>
    </WrapperSld>
  );
}

export default App;