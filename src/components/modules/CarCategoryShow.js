import Link from "next/link";
import Location from "../icons/Location";

function CarCategoryShow(item) {
  const { id, name, model, year, distance, location, image, price } = item;
  console.log(item);
  return (
    
      <Link
        href={`/cars/${id}`}
        className="overflow-hidden newShadow pb-8 rounded-xl"
      >
        <img src={image} title={name} className="" />
        <main className="w-full px-4">
        <h2 className="w-full text-center  font-bold text-lg p-2">{name}</h2>
        <div className="w-full text-gray-600 space-x-2 text-sm font-semibold">
          <span>{year}.</span>
          <span>{distance}km</span>
        </div>
        <div className="w-full flex justify-between items-center ">
          <div className="font-bold">
            <span>$</span>
            <span>{price}</span>
          </div>
          <div className="flex justify-center items-center gap-x-1 pt-5 font-bold">
            <span>{location}</span>
            <span>
              <Location />
            </span>
          </div>
        </div>
      </main>
      </Link>
    
  );
}

export default CarCategoryShow;