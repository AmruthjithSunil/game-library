import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  width: 325px;
  height: 62px;
  background: #ff7f50;
  border-radius: 8px;
  border-color: #ff7f50;
  margin-top: 16px;
`;

const Name = styled.h3`
  color: white;
`;

export default function GameButton({
  url,
  name,
}: {
  url: string;
  name: string;
}) {
  return (
    <Link to={url}>
      <Button>
        <Name>{name}</Name>
      </Button>
    </Link>
  );
}
