import Back from "@/components/icons/Back";
import { useRouter } from "next/router";

function Suv() {
  const router = useRouter();
  return (
    <div className="w-full ">
      <div className="w-full flex justify-start items-center px-3 md:px-8  mt-8">
        <button
          type="button"
          onClick={router.back}
          className="flex justify-center items-center gap-x-2 pb-5"
        >
          <Back />
          <span className="font-bold text-lg acc">Back to previous page</span>
        </button>
      </div>
    </div>
  );
}

export default Suv;
