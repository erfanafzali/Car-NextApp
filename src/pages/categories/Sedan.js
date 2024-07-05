import CarCategory from "@/components/template/CarCategory";
import carsData from "@/data/carsData";

function Sedan() {
  const sedanList = carsData.filter((item) => item.category === "sedan");

  return <CarCategory data={sedanList} />;
}

export default Sedan;
