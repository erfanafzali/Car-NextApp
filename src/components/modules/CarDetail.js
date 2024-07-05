import { useRouter } from "next/router";
import Calender from "../icons/Calender";
import Company from "../icons/Company";
import Location from "../icons/Location";
import Model from "../icons/Model";
import Road from "../icons/Road";
import Back from "../icons/Back";
import Money from "../icons/Money";

function CarDetail(carDetails) {
  const router = useRouter();
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
    <div className="w-full max-w-3xl mt-12 mb-20 px-5 md:px-0 flex flex-col justify-center items-center mx-auto">
      <div className="w-full ">
        <button
          type="button"
          onClick={router.back}
          className="flex ju items-center gap-x-2 pb-5"
        >
          <Back />
          <span className="font-bold text-lg acc">Back to previous page</span>
        </button>
      </div>
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
      <div className="w-full mt-10 newShadow min-h-14 rounded-lg px-4 py-3   text-base text-gray-600 font-semibold">
        <div className="w-full flex justify-between items-center">
          <div className="flex justify-center items-center gap-x-2">
            <span>
              <Location />
            </span>
            <span>Location</span>
          </div>
          <div>{location}</div>
        </div>
      </div>
      <div className="w-full mt-10 newShadow min-h-14 rounded-lg px-4 py-3   text-base text-gray-600 font-semibold">
        <h1 className="font-bold text-xl text-black pb-2">Extra Information</h1>
        <p className="text-justify">{description}</p>
      </div>
      <div className="w-full mt-10 newShadow min-h-14 rounded-lg px-4 py-3   text-base text-gray-600 font-semibold">
        <div className="w-full flex justify-between items-center">
          <div className="flex justify-center items-center gap-x-2">
            <span>
              <Money />
            </span>
            <span className="font-bold text-xl">Price</span>
          </div>
          <div>{price}$</div>
        </div>
      </div>
      <button className="w-full mt-10 hover:bg-green-300 newShadow text-2xl bg-green-400 rounded-lg px-4 py-3  text-gray-600 font-bold text-center">
        Buy
      </button>
    </div>
  );
}

export default CarDetail;
