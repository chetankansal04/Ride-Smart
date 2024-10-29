"use client";
import Link from "next/link";
import { useContext, useState } from "react";
import { CiMapPin, CiFlag1 } from "react-icons/ci";
// import { DatePicker, TimeInput } from "@nextui-org/react";
// import { getLocalTimeZone, Time, today } from "@internationalized/date";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { PickupContext } from "@context/PickupContext";
import { DropContext } from "@context/DropContext";
import SearchSection from "./SearchSection";
import Mapsection from "./Mapsection";

export default function Homepage() {
  const [place, setPlace] = useState({
    pickup: "",
    destination: "",
  });
  const { pickup, setPickup } = useContext(PickupContext);
  const { destination, setDestination } = useContext(DropContext);

  const getLatAndLng = (place, type) => {
    const placeId = place.value.place_id;
    const service = new google.maps.places.PlacesService(
      document.createElement("div")
    );
    service.getDetails({ placeId }, (place, status) => {
      if (status === "OK" && place.geometry && place.geometry.location) {
        if (type == "pickup") {
          setPickup({
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
            name: place.formatted_address,
            label: place.name,
          });
          setPlace((prev) => ({ ...prev, pickup: place.value }));
        } else if (type == "destination") {
          setDestination({
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
            name: place.formatted_address,
            label: place.name,
          });
          setPlace((prev) => ({ ...prev, destination: place.value }));
        }
      } else {
        console.log("Place not found");
      }
    });
  };

  return (
    <div className="flex flex-col">
      <div className="flex bg-white flex-col p-10 sm:p-10 md:p-10 items-center">
        <div className="flex flex-col md:flex-row md:w-full lg:w-4/5 gap-x-5 items-center">
          <div className="sm:w-4/5 md:3/5 lg:2/5 flex flex-col text-zinc-900 gap-y-4">
            <h1 className=" text-3xl font-bold">
              Book rides at best price with FareWay
            </h1>
            <p className="md:w-4/5 text-left text-base font-medium">
              Compare prices from popular cab booking apps, find the best deal
              and save time and money.
            </p>

            <div className="flex flex-col my-5 pr-10 gap-y-5 w-full">
              <div className="flex rounded-md bg-white h-12 w-full  border-2 items-center hover:border-zinc-800">
                <CiMapPin className="text-black size-8 pl-2" />
                <GooglePlacesAutocomplete
                  selectProps={{
                    instanceId: "pickup-location",
                    placeholder: "Pick Up Location",
                    value: place.pickup,
                    isClearable: true,
                    components: {
                      DropdownIndicator: false,
                    },
                    styles: {
                      control: (provider) => ({
                        ...provider,
                        color: "blue",
                        backgroundColor: "#00ffff00",
                        border: "none",
                        cursor: "pointer",
                      }),
                    },
                    className:
                      "px-2 w-full focus:bg-white outline-none text-black border-none focus:caret-black",
                    onChange: (value) => {
                      if (!value) {
                        setPlace((prev) => ({ ...prev, pickup: "" }));
                      } else {
                        getLatAndLng(value, "pickup");
                        setPlace(value);
                      }
                    },
                  }}
                />
              </div>
              <div className="flex rounded-md bg-white h-12 w-full border-2 items-center hover:border-zinc-800">
                <CiFlag1 className="text-black size-8 pl-2" />
                <GooglePlacesAutocomplete
                  selectProps={{
                    instanceId: "drop-location",
                    placeholder: "Drop Location",
                    value: place.destination,
                    isClearable: true,
                    components: {
                      DropdownIndicator: false,
                    },
                    styles: {
                      control: (provider) => ({
                        ...provider,
                        color: "blue",
                        backgroundColor: "#00ffff00",
                        border: "none",
                        cursor: "pointer",
                      }),
                    },
                    className:
                      "px-2 w-full focus:bg-white outline-none text-black border-none focus:caret-black",
                    onChange: (value) => {
                      if (!value) {
                        setPlace((prev) => ({ ...prev, destination: "" }));
                      } else {
                        getLatAndLng(value, "destination");
                        setPlace(value);
                      }
                    },
                  }}
                />
                {/* <div>
              <div className="grid grid-cols-2 gap-2 ">
                <div className="flex-col gap-1 bg-zinc-100 text-black flex">
                  <DatePicker
                    label="Date (dd/mm/YYYY)"
                    minValue={today(getLocalTimeZone())}
                    defaultValue={today(getLocalTimeZone()).subtract({
                      days: 1,
                    })}
                    className="flex justify-center"
                  />
                </div>
                <TimeInput
                  label="Time"
                  className=" flex justify-center bg-zinc-100 text-black"
                  defaultValue={new Time(8)}
                />
              </div>
              <p className="text-sm text-right bg-black text-white">
                *Use up & down key
              </p>
            </div> */}
              </div>
              <SearchSection></SearchSection>
            </div>
          </div>

          <Mapsection></Mapsection>
        </div>
      </div>
      <div className="">
        <Link href="/dashboard">
          <button className="font-bold rounded-lg border-2 px-2 py-1">
            Dashboard
          </button>
        </Link>
        MORE
      </div>
    </div>
  );
}
