import { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  aspect-ratio: 1 / 1;
  border-radius: 50rem;
  cursor: pointer;
  height: 4rem;
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

type PowerOrbProps = {
  count: number;
  setCount: (value: number) => void;
  increment: number;
}

const PowerOrb = ({count, setCount, increment }: PowerOrbProps) => {
  const [disableOrb, setDisableOrb] = useState(false);

  const POWER_ORB_TIMEOUT = increment * 2000;

  const handleClick = () => {
    setCount(count + increment);
    setDisableOrb(true);

    setTimeout(() => {
      setDisableOrb(false);
    }, POWER_ORB_TIMEOUT);
  }

  return <Button disabled={disableOrb} onClick={handleClick}>+ {increment}</Button>;
};

export default PowerOrb;