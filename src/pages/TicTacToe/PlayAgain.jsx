import styled from "styled-components";

import O from "./O.svg";
import X from "./X.svg";

const GameButton = styled.button`
  width: 325px;
  height: 62px;
  background: #ff7f50;
  border-radius: 8px;
  border-color: #ff7f50;
`;

const GameName = styled.h3`
  color: white;
`;

const Frame = styled.div`
  background: #fff8;
  margin: 8px 0;
  border-radius: 5px;
`;

const TurnDisplay = styled.div`
  color: white;
  margin: 8px;
  font-size: 32px;
`;

export default function PlayAgain({ victor, resetHandler }) {
  return (
    <Frame>
      <TurnDisplay>
        {victor === "X" && <img src={X} />}
        {victor === "O" && <img src={O} />} Wins
      </TurnDisplay>
      <GameButton onClick={resetHandler}>
        <GameName>PlayAgain</GameName>
      </GameButton>
    </Frame>
  );
}
