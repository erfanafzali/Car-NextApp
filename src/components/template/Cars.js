import Car from "../modules/Car";

function Cars({ data }) {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-x-8 gap-y-10 px-8 mt-10">
      {data.map((item) => (
        <Car key={item.id} {...item} />
      ))}
    </div>
  );
}

export default Cars;
