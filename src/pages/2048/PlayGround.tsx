import { useState } from "react";
import styled from "styled-components";
import { initBoxes } from "./util";

const Frame = styled.div`
  width: 327px;
  margin: auto;
  margin-top: 30px;
  text-align: center;
`;

export default function PlayGround() {
  const [boxes, setBoxes] = useState(initBoxes);
  return (
    <Frame>
      {boxes.map((row) => (
        <div key={row[0].id} style={{ display: "flex" }}></div>
      ))}
    </Frame>
  );
}
