import styled from "styled-components";

const Frame = styled.div`
  width: 90px;
  height: 90px;
  border: solid 1px;
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
      <h1>{content}</h1>
    </Frame>
  );
}
