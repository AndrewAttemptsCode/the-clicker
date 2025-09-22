import { useState } from "react";
import Orb from "./Orb";
import PowerOrb from "./PowerOrb";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const PowerOrbsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;

const Clicker = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount);
  const [countUpdated, setCountUpdated] = useState(false);

  const POWER_ORB_THRESHOLD = 100;
  const POWER_ORB_MAX_COUNT = 4;

  const powerOrbs = Math.floor(count / POWER_ORB_THRESHOLD);
  const result = Math.min(powerOrbs, POWER_ORB_MAX_COUNT);
  const orbs = [...Array(result)];

  return (
    <Container>
      <Orb
        count={count}
        setCount={setCount}
        countUpdated={countUpdated}
        setCountUpdated={setCountUpdated}
      />
      <PowerOrbsContainer>
        {orbs.map((_, index) => (
          <PowerOrb
            key={index}
            count={count}
            setCount={setCount}
            increment={(index + 1) * 5}
            setCountUpdated={setCountUpdated}
          />
        ))}
      </PowerOrbsContainer>
    </Container>
  );
};

export default Clicker;
