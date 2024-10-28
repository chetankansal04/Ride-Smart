import { DropContext } from "@context/DropContext";
import { PickupContext } from "@context/PickupContext";
import React, { useContext, useEffect } from "react";

const SearchSection = () => {
  const { pickup, setPickup } = useContext(PickupContext);
  const { destination, setDestination } = useContext(DropContext);

  useEffect(() => {
    if (pickup) {
      console.log(pickup);
    }
    if (destination) {
      console.log(destination);
    }
  }, [pickup, destination]);

  return (
    <div className="">
      <button
        type="submit"
        className="p-2 w-full rounded-md bg-zinc-600  text-white flex justify-center transition hover:bg-zinc-700"
        value="Submit"
      >
        Search
      </button>
    </div>
  );
};

export default SearchSection;
