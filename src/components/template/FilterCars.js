 
import { useRouter } from "next/router";
import { useState } from "react";

function FilterCars() {
  const router = useRouter();

  const [max, setMax] = useState("");
  const [min, setMin] = useState("");

  const searchHandler = () => {
    if (min && max) {
      router.push(`/filter/${min}/${max}`);
    } else {
      alert("please Enter mininun and maximum price");
    }

  };

  return (
    <div className="flex w-full justify-center items-center gap-x-3 py-5 px-3 md:px-8 ">
      <div className="w-[80%] flex flex-col justify-center items-center gap-y-3">
        <input
          className=" w-full newShadow min-h-12 rounded-xl px-4"
          placeholder="Enter min price"
          value={min}
          onChange={(e) => setMin(e.target.value)}
        />
        <input
          className="newShadow w-full min-h-12 rounded-xl px-3"
          placeholder="Enter max-price"
          value={max}
          onChange={(e) => setMax(e.target.value)}
        />
      </div>
      <button onClick={searchHandler} className="w-[20%] newShadow min-h-28 rounded-xl  text-base md:text-lg lg:text-xl font-bold">
        Search
      </button>
    </div>
  );
}

export default FilterCars;
