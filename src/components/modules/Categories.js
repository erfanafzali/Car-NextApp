import Link from "next/link";
import Sedan from "../icons/Sedan";
import Suv from "../icons/Suv";
import Hatchback from "../icons/Hatchback";
import Sport from "../icons/Sport";

function Categories() {
  return (
    <div className="w-full py-6 pt-10">
      <div className="w-full flex justify-around item-center gap-x-3 px-3 md:px-8">
        <Link
          href="/categories/Sedan"
          className="flex justify-center items-center flex-col text-sm md:text-lg font-semibold newShadow  py-1.5 rounded-xl w-[25%] hover:bg-gray-300"
        >
          <p>Sedan</p>
          <Sedan />
        </Link>

        <Link
          href="/categories/Suv"
          className="flex justify-center items-center flex-col text-sm md:text-lg font-semibold newShadow  py-1.5 rounded-xl w-[25%]  hover:bg-gray-300"
        >
          <p>SUV</p>
          <Suv />
        </Link>

        <Link
          href="/categories/Hatchback"
          className="flex justify-center items-center flex-col text-sm md:text-lg font-semibold newShadow  py-1.5 rounded-xl w-[25%]  hover:bg-gray-300"
        >
          <p>Hatchback</p>
          <Hatchback />
        </Link>

        <Link
          href="/categories/Sport"
          
          className="flex justify-center items-center flex-col text-sm md:text-lg font-semibold newShadow  py-1.5 rounded-xl w-[25%]  hover:bg-gray-300"
        >
          <p>Sport Car</p>
          <Sport />
        </Link>
      </div>
    </div>
  );
}

export default Categories;
