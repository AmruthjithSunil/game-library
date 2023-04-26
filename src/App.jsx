import { Link } from "react-router-dom";
import styled from "styled-components";

const Title = styled.h1`
  color: white;
`;

const Frame = styled.div`
  text-align: center;
`;

const GameButton = styled.button`
  width: 325px;
  height: 62px;
  background: #ff7f50;
  border-radius: 8px;
  border-color: #ff7f50;
  margin-top: 16px;
`;

const GameName = styled.h3`
  color: white;
`;

function App() {
  return (
    <Frame>
      <Title>Home</Title>
      <Link to="/tictactoe">
        <GameButton>
          <GameName>TicTacToe</GameName>
        </GameButton>
      </Link>
      <br />
      <Link to="/quickmath">
        <GameButton>
          <GameName>Quick Math</GameName>
        </GameButton>
      </Link>
    </Frame>
  );
}

export default App;
