import carsData from "../../data/carsData";
import CarCategory from "@/components/template/CarCategory";

function Hatchback() {
  const hatchbackList = carsData.filter(
    (item) => item.category === "hatchback"
  );

  return <CarCategory data={hatchbackList} />;
}

export default Hatchback;
