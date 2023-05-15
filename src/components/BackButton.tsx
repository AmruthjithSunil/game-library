import { Link } from "react-router-dom";
import styled from "styled-components";
import BackArrow from "../UI/BackArrow";
// import backArrow from "../UI/Svg/backArrow.png";

const Name = styled.button`
  margin: 8px;
  background: #36454f;
  border: none;
  font-size: 20px;
  color: white;
  display: flex;
`;

export default function BackButton() {
  return (
    <Link to="/">
      <Name>
        {/* <img
          src="../UI/Svg/backArrow.png"
          height="16px"
          style={{ marginRight: "8px" }}
        /> */}
        {/* <BackArrowSvg /> */}
        <BackArrow />
        Home
      </Name>
    </Link>
  );
}
