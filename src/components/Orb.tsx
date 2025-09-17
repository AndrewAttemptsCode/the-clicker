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

type OrbProps = {
  count: number;
  setCount: (value: number) => void;
}

const Orb = ({ count, setCount }: OrbProps) => {
  
  const handleCount = () => {
    setCount(count + 1);
  }

  return <Button onClick={handleCount}>{count}</Button>;
  
};

export default Orb;