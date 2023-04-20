import { useState } from "react";
import styled from "styled-components";

const Frame = styled.div`
  width: 90px;
  height: 90px;
  border: solid 1px;
  padding: auto;
  text-align: center;
`;

export default function Box({ activePlayer, updateActivePlayer }) {
  const [content, setContent] = useState("");
  const [isFilled, setIsFilled] = useState(false);

  function clickHandler() {
    if (isFilled) {
      return;
    }
    setIsFilled(true);
    activePlayer ? setContent("O") : setContent("X");
    updateActivePlayer();
  }

  return (
    <Frame onClick={clickHandler}>
      <h1>{content}</h1>
    </Frame>
  );
}
