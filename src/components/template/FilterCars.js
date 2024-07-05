import { useState } from "react";

function FilterCars() {
  const [max, setMax] = useState();
  const [min, setMin] = useState();
  return (
    <form>
      <input
        type="number"
        placeholder="min"
        value={min}
        onChange={(e) => setMin(e.target.value)}
      />
      <input
        type="number"
        placeholder="max"
        value={max}
        onChange={(e) => setMax(e.target.value)}
      />
      <button type="submit"></button>
    </form>
  );
}

export default FilterCars;
