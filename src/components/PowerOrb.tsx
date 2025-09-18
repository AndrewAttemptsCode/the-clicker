import { useState } from "react";
import styled, { css, keyframes } from "styled-components";

const slideUp = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0%);
  }
`;

const Button = styled.button`
  position: relative;
  aspect-ratio: 1 / 1;
  border-radius: 50rem;
  cursor: pointer;
  height: 4rem;
  width: auto;
  background: inherit;
  border: 2px solid gray;
  overflow: hidden;

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
`;

const OrbBackground = styled.div<OrbBackgroundProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: aqua;
  ${({ $orbClicked, $duration }) =>
    $orbClicked &&
    css`
      animation: ${slideUp} ${$duration}ms ease-in-out forwards;
    `}
`;

type OrbBackgroundProps = {
  $orbClicked: boolean;
  $duration: number;
};

type PowerOrbProps = {
  count: number;
  setCount: (value: number) => void;
  increment: number;
};

const PowerOrb = ({ count, setCount, increment }: PowerOrbProps) => {
  const [disableOrb, setDisableOrb] = useState(false);

  const POWER_ORB_TIMEOUT = increment * 2000;

  const handleClick = () => {
    setCount(count + increment);
    setDisableOrb(true);

    setTimeout(() => {
      setDisableOrb(false);
    }, POWER_ORB_TIMEOUT);
  };

  return (
    <Button disabled={disableOrb} onClick={handleClick}>
      + {increment}
      <OrbBackground $orbClicked={disableOrb} $duration={POWER_ORB_TIMEOUT} />
    </Button>
  );
};

export default PowerOrb;
