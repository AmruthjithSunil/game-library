import { Link } from "react-router-dom";
import styled from "styled-components";
import Box from "./Box";
import { useEffect, useState } from "react";
import backArrow from "../../UI/Svg/backArrow.png";
import Reset from "./Reset";
import PlayAgain from "./PlayAgain";

const Row = styled.div`
  display: flex;
`;

const BackName = styled.button`
  margin: 8px;
  background: #36454f;
  border: none;
  font-size: 20px;
  color: white;
`;

const PlayGround = styled.div`
  width: 327px;
  margin: auto;
  margin-top: 30px;
  text-align: center;
`;

const Title = styled.h1`
  color: white;
  text-align: center;
`;

export default function TicTacToe() {
  const [activePlayer, setActivePlayer] = useState(false);
  //player1 is false and player2 is true

  function updateActivePlayer() {
    setActivePlayer((activePlayer) => !activePlayer);
  }

  const [victor, setVictor] = useState("");

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

  useEffect(() => {
    if (victor !== "") {
      return;
    }
    function isRowFull(rowId) {
      const row = boxes[rowId];
      if (
        row[0].content === row[1].content &&
        row[2].content === row[0].content
      ) {
        return row[0].content;
      }
      return "";
    }

    function rowCheck() {
      for (let i = 0; i < 3; i++) {
        const temp = isRowFull(i);
        if (temp !== "") {
          return temp;
        }
      }
      return "";
    }

    const temp = rowCheck();
    if (temp !== "") {
      setVictor(temp);
    }
  }, [JSON.stringify(boxes)]);

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
                victor={victor}
              />
            ))}
          </Row>
        ))}
        {victor === "" && (
          <Reset activePlayer={activePlayer} resetHandler={resetHandler} />
        )}
        {victor !== "" && <PlayAgain victor={victor} />}
      </PlayGround>
    </>
  );
}
