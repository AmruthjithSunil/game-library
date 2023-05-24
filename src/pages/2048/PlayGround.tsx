import { useState } from "react";
import styled from "styled-components";
import { initBoxes } from "./util";
import Box from "./Box";

const Frame = styled.div`
  width: 327px;
  margin: 30px auto;
  text-align: center;
`;

export default function PlayGround() {
  const [boxes, setBoxes] = useState(initBoxes);

  function shiftRight() {
    console.log("shifting right");
    setBoxes((newBoxes) => {
      for (let i = 0; i < 4; i++) {
        for (let j = 3; j > -1; j--) {
          if (newBoxes[i][j].content === 0) {
            continue;
          }
          let t = j;
          for (let k = j + 1; k < 4; k++) {
            if (newBoxes[i][k].content !== 0) {
              break;
            }
            t = k;
          }
          if (t !== j) {
            const temp = newBoxes[i][j].content;
            newBoxes[i][j].content = newBoxes[i][t].content;
            newBoxes[i][t].content = temp;
          }
        }
      }
      newBoxes[0][0];
      return newBoxes;
    });
  }

  return (
    <Frame>
      {boxes.map((row) => (
        <div key={row[0].id} style={{ display: "flex" }}>
          {row.map((box) => (
            <Box key={box.id} content={box.content} />
          ))}
        </div>
      ))}
      <button>Up</button>
      <button>Down</button>
      <button onClick={shiftRight}>Right</button>
      <button>Left</button>
    </Frame>
  );
}
