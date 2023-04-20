import { Link } from "react-router-dom";
import styled from "styled-components";
import Box from "./Box";
import { useState } from "react";
import O from "./O";
import X from "./X";

const Row = styled.div`
  display: flex;
`;

const PlayGround = styled.div`
  width: 270px;
  margin: auto;
  margin-top: 60px;
  text-align: center;
`;

const BackName = styled.h5`
  color: white;
`;

const Title = styled.h1`
  color: white;
  text-align: center;
`;

const Flex = styled.div`
  display: flex;
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
    // if (content === "") {
    //   setPlayOrder((playOrder) => {
    //     playOrder.pop();
    //     return playOrder;
    //   });
    // } else {
    //   setPlayOrder((playOrder) => [...playOrder, id]);
    // }
    setBoxes((boxes) => {
      boxes[Math.floor(id / 3)][id % 3].content = content;
      return boxes;
    });
  }

  return (
    <>
      <Link to="/">
        <BackName>{"<-"}Home</BackName>
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
        {activePlayer ? <O /> : <X />}
        {/* <button onClick={undoHandler}>undo</button> */}
      </PlayGround>
    </>
  );
}
