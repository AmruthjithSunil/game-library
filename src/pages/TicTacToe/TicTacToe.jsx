import { Link } from "react-router-dom";
import styled from "styled-components";
import Box from "./Box";
import { useState } from "react";

const Row = styled.div`
  display: flex;
`;

const PlayGround = styled.div`
  width: 270px;
  margin: auto;
  margin-top: 100px;
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

  // const [boxContent, setBoxContent] = useState([
  //   ["", "", ""],
  //   ["", "", ""],
  //   ["", "", ""],
  // ]);

  // function updateBoxContent(actPlayer, id) {
  //   const row = Math.floor((id - 1) / 3);
  //   const col = (id - 1) % 3;

  // }

  return (
    <>
      <Link to="/">Home</Link>
      <PlayGround>
        {boxes.map((rows) => (
          <Row key={rows[0]}>
            {rows.map((box) => (
              <Box
                key={box}
                id={box}
                activePlayer={activePlayer}
                updateActivePlayer={updateActivePlayer}
              />
            ))}
          </Row>
        ))}
      </PlayGround>
    </>
  );
}
