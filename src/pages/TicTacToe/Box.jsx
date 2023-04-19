import { useState } from "react";
import styled from "styled-components";

const Frame = styled.div`
  width: 30px;
  height: 30px;
  border: solid 1px;
  padding: auto;
  text-align: center;
`;

export default function Box({ activePlayer, updateActivePlayer }) {
  const [content, setContent] = useState("");

  function clickHandler() {
    activePlayer ? setContent("O") : setContent("X");
    updateActivePlayer();
  }

  return <Frame onClick={clickHandler}>{content}</Frame>;
}
