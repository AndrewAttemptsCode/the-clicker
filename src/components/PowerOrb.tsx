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

const orbAnimate = keyframes`
  50% {
    transform: translateY(-10%);
  }
`

const orbClicked = keyframes`
  50% {
    transform: scale(0.9);
  }
`

const Button = styled.button<ButtonProps>`
  position: relative;
  aspect-ratio: 1 / 1;
  border-radius: 50rem;
  cursor: pointer;
  height: 4rem;
  width: 4rem;
  background: inherit;
  border: none;
  box-shadow: 0 0 8px 3px rgb(0, 190, 190);
  text-shadow: 2px 2px 5px rgba(0,0,0,0.5);
  color: rgb(220, 253, 253);
  font-weight: bold;
  font-size: 1.1rem;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  animation: ${orbAnimate} 5000ms ease-in-out infinite;

  ${({ $orbClicked }) => $orbClicked && css`animation: ${orbClicked} 200ms ease-in-out forwards`};

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 16px 6px rgb(0, 161, 190);
  }

  &:active {
    background: inherit;
  }
`;

const OrbBackground = styled.div<OrbBackgroundProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: linear-gradient(to bottom, rgb(92, 238, 238) , rgb(26, 66, 66));
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
  setCountUpdated: (value: boolean) => void;
};

type ButtonProps = {
  $orbClicked: boolean;
}

const PowerOrb = ({ count, setCount, increment, setCountUpdated }: PowerOrbProps) => {
  const [disableOrb, setDisableOrb] = useState(false);
  const [orbClicked, setOrbClicked] = useState(false);

  const POWER_ORB_TIMEOUT = increment * 2000;

  const handleClick = () => {
    setCount(count + increment);
    setDisableOrb(true);
    setCountUpdated(true);
    setOrbClicked(true);

    setTimeout(() => {
      setCountUpdated(false);
      setOrbClicked(false);
    }, 200);

    setTimeout(() => {
      setDisableOrb(false);
    }, POWER_ORB_TIMEOUT);
  };

  return (
    <Button disabled={disableOrb} onClick={handleClick} $orbClicked={orbClicked} aria-label={`Add ${increment} to count, currently ${count}`}>
      + {increment}
      <OrbBackground $orbClicked={disableOrb} $duration={POWER_ORB_TIMEOUT} />
    </Button>
  );
};

export default PowerOrb;
