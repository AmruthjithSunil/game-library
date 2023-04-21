import { Link } from "react-router-dom";
import styled from "styled-components";
import Box from "./Box";
import { useState } from "react";
import O from "./O.svg";
import X from "./X.svg";
import backArrow from "../../UI/Svg/backArrow.png";

const Row = styled.div`
  display: flex;
`;

const PlayGround = styled.div`
  width: 327px;
  margin: auto;
  margin-top: 30px;
  text-align: center;
`;

const BackName = styled.button`
  margin: 8px;
  background: #36454f;
  border: none;
  font-size: 20px;
  color: white;
`;

const Title = styled.h1`
  color: white;
  text-align: center;
`;

const TurnDisplay = styled.div`
  color: white;
  margin: 32px;
  font-size: 32px;
`;

export default function TicTacToe() {
  const [activePlayer, setActivePlayer] = useState(false);
  //player1 is false and player2 is true

  function updateActivePlayer() {
    setActivePlayer((activePlayer) => !activePlayer);
  }

  const [boxes, setBoxes] = useState([
    [
      { id: 0, content: "" },
      { id: 1, content: "" },
      { id: 2, content: "" },
    ],
    [
      { id: 3, content: "" },
      { id: 4, content: "" },
      { id: 5, content: "" },
    ],
    [
      { id: 6, content: "" },
      { id: 7, content: "" },
      { id: 8, content: "" },
    ],
  ]);

  function updateBoxes(id, content) {
    setBoxes((boxes) => {
      boxes[Math.floor(id / 3)][id % 3].content = content;
      return boxes;
    });
  }

  function resetHandler() {
    setBoxes([
      [
        { id: 0, content: "" },
        { id: 1, content: "" },
        { id: 2, content: "" },
      ],
      [
        { id: 3, content: "" },
        { id: 4, content: "" },
        { id: 5, content: "" },
      ],
      [
        { id: 6, content: "" },
        { id: 7, content: "" },
        { id: 8, content: "" },
      ],
    ]);
  }

  return (
    <>
      <Link to="/">
        <BackName>
          <img src={backArrow} height="16px" style={{ marginRight: "8px" }} />
          Home
        </BackName>
      </Link>
      <Title>Tic Tac Toe</Title>
      <PlayGround>
        {boxes.map((row) => (
          <Row key={row[0].id}>
            {row.map((box) => (
              <Box
                key={box.id}
                id={box.id}
                content={box.content}
                updateBoxes={updateBoxes}
                activePlayer={activePlayer}
                updateActivePlayer={updateActivePlayer}
              />
            ))}
          </Row>
        ))}
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
      </PlayGround>
    </>
  );
}
