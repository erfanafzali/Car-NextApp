import { useRouter } from "next/router";
import carsData from "../../data/carsData";
import React from "react";
import CarDetail from "@/components/modules/CarDetail";

function CarDetailPage() {
  const router = useRouter();
  const { CarsId } = router.query;
  const carDetails = carsData[CarsId - 1];
  return <CarDetail {...carDetails} />;
}

export default CarDetailPage;
