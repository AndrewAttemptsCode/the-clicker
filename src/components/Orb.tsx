import { useState } from "react";

const Orb = () => {
  const [count, setCount] = useState(0);
  
  const handleCount = () => {
    setCount((prev) => prev + 1);
  }

  return (
    <div>
      <button onClick={handleCount}>{count}</button>
    </div>
  );
};

export default Orb;