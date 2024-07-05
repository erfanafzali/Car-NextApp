import CarCategory from "@/components/template/CarCategory";
import carsData from "@/data/carsData";

function Sport() {
  const sportList = carsData.filter((item) => item.category === "sport");

  return <CarCategory data={sportList} />;
}

export default Sport;
