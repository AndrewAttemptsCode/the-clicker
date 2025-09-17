import { useState } from "react";
import Orb from "./Orb";
import PowerOrb from "./PowerOrb";

const Clicker = () => {
  const [count, setCount] = useState(0);

  const POWER_ORB_THRESHOLD = 100;
  const POWER_ORB_MAX_COUNT = 4;

  const powerOrbs = Math.floor(count / POWER_ORB_THRESHOLD);
  const result = Math.min(powerOrbs, POWER_ORB_MAX_COUNT);
  const orbs = [...Array(result)];

  return (
    <div>
      <Orb count={count} setCount={setCount} />
      {orbs.map((_, index) => (
        <PowerOrb key={index} count={count} setCount={setCount} increment={(index + 1) * 5 } />
      ))}
    </div>
  );
};

export default Clicker;