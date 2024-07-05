import Cars from "@/components/template/Cars.js";
import carsData from "../../data/carsData";
import Categories from "@/components/modules/Categories";
import FilterCars from "@/components/template/FilterCars";

function CarsPage() {
  return (
    <div className="mb-20 w-full">
      <Categories />
      <FilterCars />
      <Cars data={carsData} />
    </div>
  );
}

export default CarsPage;
