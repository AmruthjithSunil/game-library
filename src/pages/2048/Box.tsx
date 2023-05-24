import styled from "styled-components";

const Frame = styled.div`
  width: 109px;
  height: 80px;
  border: solid 2px #ffffcc;
  color: white;
  font-size: 40px;
`;

export default function Box({ content }: { content: number }) {
  return <Frame>{content !== 0 && content}</Frame>;
}
