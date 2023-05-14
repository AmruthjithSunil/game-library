import { useState } from "react";
import styled from "styled-components";
import Box from "./Box";

const Frame = styled.div`
  color: white;
`;

const Row = styled.div`
  display: flex;
  width: 300px;
  margin: auto;
`;

export default function ChainReaction() {
  const initBoxes = [];
  for (let i = 0; i < 11; i++) {
    const row = [];
    for (let j = 0; j < 6; j++) {
      row.push({ id: i * 6 + j, content: "" });
    }
    initBoxes.push(row);
  }

  const [boxes, setBoxes] = useState(initBoxes);

  return (
    <Frame>
      {boxes.map((row) => (
        <Row key={row[0].id}>
          {row.map((box) => (
            <Box key={box.id} content={box.content} />
          ))}
        </Row>
      ))}
    </Frame>
  );
}
