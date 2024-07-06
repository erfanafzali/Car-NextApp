import Categories from "@/components/modules/Categories";
import Cars from "@/components/template/Cars";
import FilterCars from "@/components/template/FilterCars";
import carsData from "@/data/carsData";
import Link from "next/link";

export default function Home() {
  const showThreeCars = carsData.slice(0, 3);

  return (
    <main className="flex flex-col items-center justify-between w-full ">
      <div className="mb-20 w-full">
        <Categories />
        <FilterCars />
        <Cars data={showThreeCars} />
        <Link
          href="/cars"
          className="w-full flex justify-center items-center px-3 md:px-8 mt-10"
        >
          <button className="w-full newShadow rounded-xl min-h-14 bg-gray-400 text-white font-bold text-base md:text-xl">
            Show all of Cars ...
          </button>
        </Link>
      </div>
    </main>
  );
}
