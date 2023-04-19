import { Link } from "react-router-dom";
import styled from "styled-components";
import Box from "./Box";
import { useState } from "react";

const Row = styled.div`
  display: flex;
`;

export default function TicTacToe() {
  const [activePlayer, setActivePlayer] = useState(false);
  //player1 is false and player2 is true

  function updateActivePlayer() {
    setActivePlayer((activePlayer) => !activePlayer);
  }

  const boxes = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  return (
    <>
      <Link to="/">Home</Link>
      {boxes.map((rows) => (
        <Row key={rows[0]}>
          {rows.map((box) => (
            <Box
              key={box}
              activePlayer={activePlayer}
              updateActivePlayer={updateActivePlayer}
            />
          ))}
        </Row>
      ))}
    </>
  );
}
