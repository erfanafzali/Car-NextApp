import Calender from "../icons/Calender";
import Company from "../icons/Company";
import Model from "../icons/Model";
import Road from "../icons/Road";

function CarDetail(carDetails) {
  const {
    id,
    name,
    model,
    year,
    distance,
    location,
    image,
    price,
    description,
  } = carDetails;

  return (
    <div className="w-full max-w-3xl mt-12 mb-12 px-5 md:px-0">
      <img src={image} className="rounded-xl shadow-lg" />
      <h1 className="w-full text-start py-4 text-lg md:text-xl font-bold">
        {name} {model}
      </h1>
      <div className="w-full newShadow min-h-32 rounded-lg px-4 py-3 space-y-4 md:space-y-6 text-base text-gray-600 font-semibold">
        {/* Company */}
        <div className="w-full flex justify-between items-center">
          <div className="flex justify-center items-center gap-x-2">
            <span>
              <Company />
            </span>
            <span>Company</span>
          </div>
          <div>{name}</div>
        </div>
        {/* Model */}
        <div className="w-full flex justify-between items-center">
          <div className="flex justify-center items-center gap-x-2">
            <span>
              <Model />
            </span>
            <span>Model</span>
          </div>
          <div>{model}</div>
        </div>
        {/* First registration */}
        <div className="w-full flex justify-between items-center">
          <div className="flex justify-center items-center gap-x-2">
            <span>
              <Calender />
            </span>
            <span>First registration</span>
          </div>
          <div>{year}</div>
        </div>
        {/* Kms Driven */}
        <div className="w-full flex justify-between items-center">
          <div className="flex justify-center items-center gap-x-2">
            <span>
              <Road />
            </span>
            <span>Kms Driven</span>
          </div>
          <div>{distance}</div>
        </div>
      </div>
    </div>
  );
}

export default CarDetail;
