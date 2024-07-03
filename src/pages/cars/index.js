import Cars from "@/components/template/Cars.js";
import carsData from "../../data/carsData";

function CarsPage() {
  return (
    <div>
      <Cars data={carsData} />
    </div>
  );
}

export default CarsPage;
