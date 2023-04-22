import styled from "styled-components";

const GameButton = styled.button`
  width: 325px;
  height: 62px;
  background: #ff7f50;
  border-radius: 8px;
  border-color: #ff7f50;
  margin: 32px 0;
`;

const GameName = styled.h3`
  color: white;
`;

export default function PlayAgain({ victor, resetHandler }) {
  return (
    <GameButton onClick={resetHandler}>
      <GameName>PlayAgain</GameName>
    </GameButton>
  );
}
