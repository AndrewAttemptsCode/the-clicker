import styled from "styled-components";

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
  color: rgb(220, 253, 253);

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

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
  z-index: -1;
  background: linear-gradient(to bottom, rgb(92, 238, 238) , rgb(26, 66, 66));
  transform-origin: bottom;
  transform: ${({$scaleTracker}) => $scaleTracker ? `scaleY(${$scaleTracker})` : "none"}; 
`

type OrbProps = {
  count: number;
  setCount: (value: number) => void;
}

type OrbBackgroundProps = {
  $scaleTracker: number;
}

const Orb = ({ count, setCount }: OrbProps) => {

  const SCALE = (count % 100) / 100;
  
  const handleIncrement = () => {
    setCount(count + 1);
  }

  return (
    <Button onClick={handleIncrement}>
      {count}
      <OrbBackground $scaleTracker={SCALE} />
    </Button>
  );
};

export default Orb;