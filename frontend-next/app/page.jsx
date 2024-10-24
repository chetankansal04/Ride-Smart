"use client";
import Link from "next/link";
import { useState } from "react";
import { CiMapPin } from "react-icons/ci";
import {DatePicker} from "@nextui-org/react";

export default function Home() {
  const [locationData, setLocationData] = useState({
    pickup: "",
    destination: "",
    date: "",
    time: "",
  });

  const handleDataChange = (e) => {
    e.preventDefault();
    setLocationData({ ...locationData, [e.target.id]: e.target.value });
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(locationData);
  };

  return (
    <div className="min-h-dvh">
      <div className="flex bg-black flex-col p-10 sm:p-10 md:p-10 items-center">
        <div className="sm:w-4/5 md:3/5 lg:2/5 flex flex-col text-zinc-100 gap-y-4">
          <h1 className=" text-3xl font-bold">
            Book rides at best price with FareWay
          </h1>
          <p className="md:w-4/5 text-left text-base font-medium">
            Compare prices from popular cab booking apps, find the best deal and
            save time and money.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col my-10 gap-y-5 sm:w-4/5 md:w-3/5"
          >
            <div className="flex bg-white h-12 w-full  border items-center hover:border-b-zinc-800">
              <CiMapPin className="text-black size-8" />
              <input
                id="pickup"
                value={locationData.pickup}
                type="search"
                name="pickup"
                onChange={handleDataChange}
                placeholder="Pick Up Location"
                aria-label="Search Pick up Location"
                className="px-5  focus:bg-white outline-none text-black border-none focus:caret-black"
              />
            </div>
            <div className="flex bg-white h-12 w-full border items-center hover:border-b-zinc-800">
              <CiMapPin className="text-black size-8" />
              <input
                id="pickup"
                type="search"
                value={locationData.destination}
                name="pickup"
                onChange={handleDataChange}
                placeholder="Drop Location"
                aria-label="Search Drop Location"
                className="px-5 focus:bg-white outline-none border-none focus:caret-black text-black"
              />
            </div>
            <DatePicker label="Birth date" className="max-w-[284px]" />
            <div className="bg-zinc-100 text-black flex justify-center">
            <button type="submit" className="p-2" value="Submit">Submit</button>
            </div>
          </form>
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
