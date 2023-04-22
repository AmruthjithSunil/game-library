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

    function isColFull(colId) {
      const col = [
        { ...boxes[0][colId] },
        { ...boxes[1][colId] },
        { ...boxes[2][colId] },
      ];
      if (
        col[0].content === col[1].content &&
        col[2].content === col[0].content
      ) {
        return col[0].content;
      }
      return "";
    }

    function colCheck() {
      for (let i = 0; i < 3; i++) {
        const temp = isColFull(i);
        if (temp !== "") {
          return temp;
        }
      }
      return "";
    }

    function diagonalCheck() {
      const diagonal1 = [
        { ...boxes[0][0] },
        { ...boxes[1][1] },
        { ...boxes[2][2] },
      ];

      if (
        diagonal1[0].content === diagonal1[1].content &&
        diagonal1[2].content === diagonal1[0].content
      ) {
        if (diagonal1[0].content !== "") {
          return diagonal1[0].content;
        }
      }

      const diagonal2 = [
        { ...boxes[0][2] },
        { ...boxes[1][1] },
        { ...boxes[2][0] },
      ];

      if (
        diagonal2[0].content === diagonal2[1].content &&
        diagonal2[2].content === diagonal2[0].content
      ) {
        return diagonal2[0].content;
      }

      return "";
    }

    const tempRow = rowCheck();
    if (tempRow !== "") {
      setVictor(tempRow);
      return;
    }

    const tempCol = colCheck();
    if (tempCol !== "") {
      setVictor(tempCol);
      return;
    }

    const tempDiagonal = diagonalCheck();
    if (tempDiagonal !== "") {
      setVictor(tempDiagonal);
      return;
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
    setActivePlayer(false);
    setVictor("");
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
        {victor !== "" && (
          <PlayAgain victor={victor} resetHandler={resetHandler} />
        )}
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
      </PlayGround>
    </>
  );
}
