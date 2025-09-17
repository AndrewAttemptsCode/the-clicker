import { useState } from "react";
import Orb from "./Orb";

const Clicker = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Orb count={count} setCount={setCount} />
    </div>
  );
};

export default Clicker;