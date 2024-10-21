"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { MdOutlineClose } from "react-icons/md";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="sticky top-0 justify-between bg-black flex sm:text-base lg:text-lg text-zinc-100 font-semibold py-2 px-4 md:px-10">

      {/* Mobile Navbar */}

      <div className="sm:hidden">
        <Image
          className=" flex object-contain rounded-full"
          src="/artwork.png"
          width={42}
          height={42}
          alt="logo"
        />
      </div>
      <div className="sm:hidden flex items-center gap-6">
        <Link href="/login">
          <button className="transition hover:scale-110">Log In</button>
        </Link>
        <Link href="/register">
          <button className="transition hover:scale-110 border-2 px-2 py-1 rounded-xl">
            Sign In
          </button>
        </Link>
        <button onClick={() => setIsOpen((prev) => !prev)}>
          {isOpen && (
            <MdOutlineClose className="transition hover:scale-110 size-6" />
          )}
          {!isOpen && (
            <CiMenuFries className="transition hover:scale-110 size-6" />
          )}
        </button>
        {isOpen && (
          <div className="scale-110 rounded-md fixed top-20 right-4 pl-10 shadow-lg pr-2 py-4 transition delay-200 bg-black">
            <div className="flex items-end p-2 gap-y-6 flex-col transition delay-200">
              <Link
                className="transition hover:scale-105 active:text-blue-400"
                href="/book"
              >
                Ride
              </Link>
              <Link
                className="transition hover:scale-105 active:text-blue-400"
                href="/about"
              >
                About
              </Link>
              <Link
                className="transition hover:scale-105 active:text-blue-400"
                href="/services"
              >
                Services
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* // DeskTop Navbar  */}

      
      <div className="hidden sm:flex items-center gap-4">
        <div>
          <Image
            className="flex object-contain rounded-full"
            src="/artwork.png"
            width={50}
            height={50}
            alt="logo"
          />
        </div>
        <div className="flex pl-8 md:pl-12 sm:gap-8 md:gap-16 lg:gap-20 ">
        <Link
          className="transition hover:scale-105 active:text-blue-400"
          href="/book"
        >
          Ride
        </Link>
        <Link
          className="transition hover:scale-105 active:text-blue-400"
          href="/about"
        >
          About
        </Link>
        <Link
          className="transition hover:scale-105 active:text-blue-400"
          href="/services"
        >
          Services
        </Link>
        </div>
      </div>
      <div className="hidden sm:flex gap-4 items-center">
        <Link href="/login">
          <button className="transition hover:scale-110">Log In</button>
        </Link>
        <Link href="/register">
          <button className="transition hover:scale-110 border-2 px-2 py-1 rounded-xl">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
