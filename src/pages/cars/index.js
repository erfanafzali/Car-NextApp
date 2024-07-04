import Cars from "@/components/template/Cars.js";
import carsData from "../../data/carsData";
import Categories from "@/components/modules/Categories";

function CarsPage() {
  return (
    <div className="mb-20 w-full">
      <Categories />
      <Cars data={carsData} />
    </div>
  );
}

export default CarsPage;
