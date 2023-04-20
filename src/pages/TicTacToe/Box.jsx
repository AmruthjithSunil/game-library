import styled from "styled-components";
import X from "./X";
import O from "./O";

const Frame = styled.div`
  width: 90px;
  height: 90px;
  border: solid 1.5px #ffffcc;
  padding: auto;
  text-align: center;
`;

export default function Box({
  id,
  updateBoxes,
  activePlayer,
  updateActivePlayer,
  content,
}) {
  function clickHandler() {
    if (content != "") {
      return;
    }
    const c = activePlayer ? "O" : "X";
    updateBoxes(id, c);
    updateActivePlayer();
  }

  return (
    <Frame onClick={clickHandler}>
      {content === "X" && <X />}
      {content === "O" && <O />}
    </Frame>
  );
}
