import styled from "styled-components";

const Button = styled.button`
  
`

type PowerOrbProps = {
  count: number;
  setCount: (value: number) => void;
  increment: number;
}

const PowerOrb = ({count, setCount, increment }: PowerOrbProps) => {
  
  const handleIncrement = () => {
    setCount(count + increment);
  }

  return <Button onClick={handleIncrement}>+{increment}</Button>;
};

export default PowerOrb;