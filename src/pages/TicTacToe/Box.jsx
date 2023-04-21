import styled from "styled-components";
import X from "./X.svg";
import O from "./O.svg";

const Frame = styled.div`
  width: 109px;
  height: 109px;
  border: solid 2px #ffffcc;
  border-left: ${({ id }) => id % 3 === 0 && "4px solid #ffffcc"};
  border-right: ${({ id }) => id % 3 === 2 && "4px solid #ffffcc"};
  border-top: ${({ id }) => Math.floor(id / 3) === 0 && "4px solid #ffffcc"};
  border-bottom: ${({ id }) => Math.floor(id / 3) === 2 && "4px solid #ffffcc"};
  border-radius: ${({ id }) => id === 0 && "10px 0px 0px 0px"};
  border-radius: ${({ id }) => id === 2 && "0px 10px 0px 0px"};
  border-radius: ${({ id }) => id === 8 && "0px 0px 10px 0px"};
  border-radius: ${({ id }) => id === 6 && "0px 0px 0px 10px"};
`;

const Content = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
      <Content>
        {content === "X" && <img src={X} />}
        {content === "O" && <img src={O} />}
      </Content>
    </Frame>
  );
}
