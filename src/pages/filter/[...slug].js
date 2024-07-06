import Cars from "@/components/template/Cars";
import carsData from "../../data/carsData";
import { useRouter } from "next/router";

function FiltredCars() {
  const router = useRouter();
  const [min, max] = router.query.slug || [];
  const filtredData = carsData.filter(
    (item) => item.price > min && item.price < max
  );

  if (!filtredData.length)
    return (
      <div className="h-screen w-full mx-auto font-bold text-3xl text-center mt-32">
        Not found
      </div>
    );

  return <Cars data={filtredData} />;
}

export default FiltredCars;
