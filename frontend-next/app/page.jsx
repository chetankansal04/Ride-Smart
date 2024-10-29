"use client";
import Homepage from "@app/home/Homepage";
import { DropContext } from "@context/DropContext";
import { PickupContext } from "@context/PickupContext";
import { LoadScript } from "@react-google-maps/api";
import React, { useState } from "react";

const page = () => {
  const [pickup, setPickup] = useState([]);
  const [destination, setDestination] = useState([]);
  return (
    <div className="min-h-dvh">
      <LoadScript
        libraries={["places"]}
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
      >
        <PickupContext.Provider value={{ pickup, setPickup }}>
          <DropContext.Provider value={{ destination, setDestination }}>
            <Homepage></Homepage>
          </DropContext.Provider>
        </PickupContext.Provider>
      </LoadScript>
    </div>
  );
};

export default page;
