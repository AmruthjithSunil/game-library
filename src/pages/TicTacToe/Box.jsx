import styled from "styled-components";
import X from "./X";
import O from "./O";

const Frame = styled.div`
  width: 90px;
  height: 90px;
  border: solid 1px #ffffcc;
  padding: auto;
  text-align: center;
  border-left: ${({ id }) => id % 3 === 0 && "2px solid #ffffcc"};
  border-right: ${({ id }) => id % 3 === 2 && "2px solid #ffffcc"};
  border-top: ${({ id }) => Math.floor(id / 3) === 0 && "2px solid #ffffcc"};
  border-bottom: ${({ id }) => Math.floor(id / 3) === 2 && "2px solid #ffffcc"};
  border-radius: ${({ id }) => id === 0 && "10px 0px 0px 0px"};
  border-radius: ${({ id }) => id === 2 && "0px 10px 0px 0px"};
  border-radius: ${({ id }) => id === 8 && "0px 0px 10px 0px"};
  border-radius: ${({ id }) => id === 6 && "0px 0px 0px 10px"};
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
    <Frame id={id} onClick={clickHandler}>
      {content === "X" && <X />}
      {content === "O" && <O />}
    </Frame>
  );
}
