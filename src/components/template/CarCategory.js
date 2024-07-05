import React from "react";
import MoveBack from "../modules/MoveBack";
import CarCategoryShow from "../modules/CarCategoryShow";

function CarCategory({ data }) {
  console.log(data);
  return (
    <div className="w-full">
      <MoveBack />
      <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center items-center gap-x-8 gap-y-4 px-4">
        {data.map((item) => (
          <CarCategoryShow key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default CarCategory;
