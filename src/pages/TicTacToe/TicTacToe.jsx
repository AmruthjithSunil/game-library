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

  return (
    <>
      <Link to="/">Home</Link>
      <Row>
        <Box
          activePlayer={activePlayer}
          updateActivePlayer={updateActivePlayer}
        />
        <Box
          activePlayer={activePlayer}
          updateActivePlayer={updateActivePlayer}
        />
        <Box
          activePlayer={activePlayer}
          updateActivePlayer={updateActivePlayer}
        />
      </Row>
      <Row>
        <Box
          activePlayer={activePlayer}
          updateActivePlayer={updateActivePlayer}
        />
        <Box
          activePlayer={activePlayer}
          updateActivePlayer={updateActivePlayer}
        />
        <Box
          activePlayer={activePlayer}
          updateActivePlayer={updateActivePlayer}
        />
      </Row>
      <Row>
        <Box
          activePlayer={activePlayer}
          updateActivePlayer={updateActivePlayer}
        />
        <Box
          activePlayer={activePlayer}
          updateActivePlayer={updateActivePlayer}
        />
        <Box
          activePlayer={activePlayer}
          updateActivePlayer={updateActivePlayer}
        />
      </Row>
    </>
  );
}
