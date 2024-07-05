import CarCategory from "@/components/template/CarCategory";
import carsData from "@/data/carsData";

function Suv() {
  const suvList = carsData.filter((item) => item.category === "suv");

  return <CarCategory data={suvList} />;
}

export default Suv;
