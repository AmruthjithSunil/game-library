import styled from "styled-components";

const Frame = styled.div`
  height: 50px;
  width: 50px;
  border: solid 1px red;
  text-align: center;
`;

export default function Box({ content }) {
  function clickHandler() {
    return;
  }

  return <Frame onClick={clickHandler}>{content}</Frame>;
}
