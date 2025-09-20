import styled, { css, keyframes } from "styled-components";

const textPop = keyframes`
  50% {
    font-size: 2.5rem;
  }
`

const Button = styled.button`
  aspect-ratio: 1 / 1;
  border-radius: 50rem;
  cursor: pointer;
  height: 30dvh;
  width: 30dvh;
  background: inherit;
  border: none;
  overflow: hidden;
  box-shadow: 0 0 8px 3px rgb(0, 190, 190);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &:focus {
    outline: none;
  }

  &:active {
    box-shadow: 0 0 8px 3px rgb(0, 190, 190);
    background: inherit;
  }
`

const OrbBackground = styled.div<OrbBackgroundProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 5;
  background: linear-gradient(to bottom, rgb(92, 238, 238) , rgb(26, 66, 66));
  transform-origin: bottom;
  transform: ${({$scaleTracker}) => $scaleTracker ? `scaleY(${$scaleTracker})` : "none"}; 
`

const ClickCounter = styled.span<countUpdatedProps>`
  z-index: 10;
  color: rgb(220, 253, 253);
  font-weight: bold;
  font-size: 2rem;
  text-shadow: 2px 2px 5px rgba(0,0,0,0.5);
  ${({$countUpdated}) => $countUpdated && css`animation: ${textPop} 200ms ease-in-out forwards`}
`

type OrbProps = {
  count: number;
  setCount: (value: number) => void;
  countUpdated: boolean;
  setCountUpdated: (value: boolean) => void;
}

type OrbBackgroundProps = {
  $scaleTracker: number;
}

type countUpdatedProps = {
  $countUpdated: boolean;
}

const Orb = ({ count, setCount, countUpdated, setCountUpdated }: OrbProps) => {

  const SCALE = (count % 100) / 100;
  
  const handleIncrement = () => {
    setCount(count + 1);
    setCountUpdated(true);

    setTimeout(() => {
      setCountUpdated(false);
    }, 200);
  }

  return (
    <Button onClick={handleIncrement}>
      <ClickCounter $countUpdated={countUpdated}>{count}</ClickCounter>
      <OrbBackground $scaleTracker={SCALE} />
    </Button>
  );
};

export default Orb;