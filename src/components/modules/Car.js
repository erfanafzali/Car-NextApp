import Location from "../icons/Location";

function Car(item) {
  const { id, name, model, year, distance, location, image, price } = item;
  console.log(item);
  return (
    <div className="rounded-t-xl newShadow overflow-hidden pb-5">
      <img src={image} title={name} />
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
    </div>
  );
}

export default Car;
