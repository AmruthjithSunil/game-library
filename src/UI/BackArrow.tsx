import styled from "styled-components";

const Frame = styled.div`
  margin: auto;
`;

const Slash = styled.div`
  background: white;
  height: 2px;
  width: 10px;
  rotate: 330deg;
`;

const HorizontalLine = styled.div`
  background: white;
  height: 2px;
  width: 25px;
`;

const BackSlash = styled.div`
  background: white;
  height: 2px;
  width: 10px;
  rotate: 30deg;
`;

export default function BackArrow() {
  return (
    <Frame>
      <Slash />
      <HorizontalLine />
      <BackSlash />
    </Frame>
  );
}
