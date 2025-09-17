import { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  aspect-ratio: 1 / 1;
  border-radius: 50rem;
  cursor: pointer;
  height: 30dvh;
  width: auto;
  background: inherit;
  border: 4px solid gray;

  display: flex;
  align-items: center;
  justify-content: center;

  &:focus {
    outline: none;
  }

  &:active {
    box-shadow: none;
    background: inherit;
  }
`

const Orb = () => {
  const [count, setCount] = useState(0);
  
  const handleCount = () => {
    setCount((prev) => prev + 1);
  }

  return (
    <div>
      <Button onClick={handleCount}>{count}</Button>
    </div>
  );
};

export default Orb;