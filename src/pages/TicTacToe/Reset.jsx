import styled from "styled-components";

import O from "./O.svg";
import X from "./X.svg";

const TurnDisplay = styled.div`
  color: white;
  margin: 32px;
  font-size: 32px;
`;

const BackName = styled.button`
  margin: 8px;
  background: #36454f;
  border: none;
  font-size: 20px;
  color: white;
`;

export default function Reset({ resetHandler, activePlayer }) {
  return (
    <>
      <TurnDisplay>
        {activePlayer ? (
          <img src={O} height="32px" />
        ) : (
          <img src={X} height="32px" />
        )}
        's turn
      </TurnDisplay>
      <div>
        <BackName onClick={resetHandler}>Reset</BackName>
      </div>
    </>
  );
}
