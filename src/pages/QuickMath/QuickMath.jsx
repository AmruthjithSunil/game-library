import { Link } from "react-router-dom";
import styled from "styled-components";
import backArrow from "../../UI/Svg/backArrow.png";
import { useState } from "react";

const BackName = styled.button`
  margin: 8px;
  background: #36454f;
  border: none;
  font-size: 20px;
  color: white;
`;

const Title = styled.h1`
  color: white;
  text-align: center;
`;

const Equation = styled.h3`
  color: white;
  text-align: center;
`;

export default function QuickMath() {
  function random() {
    return Math.floor(Math.random() * 100);
  }

  const [num1, setNum1] = useState(random());
  const [num2, setNum2] = useState(random());

  function missTensPlace(n) {
    return `${Math.floor(n / 100)}_${n % 10}`;
  }

  return (
    <>
      <Link to="/">
        <BackName>
          <img src={backArrow} height="16px" style={{ marginRight: "8px" }} />
          Home
        </BackName>
      </Link>
      <Title>Quick Math</Title>
      <Equation>
        {num1}x{num2}={missTensPlace(num1 * num2)}
      </Equation>
    </>
  );
}
