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

const TurnDisplay = styled.div`
  color: white;
  margin: 32px;
  font-size: 32px;
`;

export default function PlayAgain({ victor, resetHandler }) {
  return (
    <>
      <TurnDisplay>
        {victor === "X" && <img src={X} />}
        {victor === "O" && <img src={O} />} Wins
      </TurnDisplay>
      <GameButton onClick={resetHandler}>
        <GameName>PlayAgain</GameName>
      </GameButton>
    </>
  );
}
