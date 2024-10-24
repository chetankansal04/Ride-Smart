"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { MdOutlineClose } from "react-icons/md";
import ProfilePicture from "./ProfilePicture";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="sticky top-0 justify-between bg-black flex sm:text-base lg:text-lg text-zinc-100 font-semibold py-4 px-4 md:px-10 md:py-6">
      {/* Mobile Navbar */}

      <div className="flex sm:hidden items-center scale-125">
        <Link href="/">
          <Image
            src="/Logo.svg"
            width={60}
            height={60}
            alt="logo"
            className="transition hover:scale-110"
          ></Image>
        </Link>
      </div>
      <div className="sm:hidden flex items-center gap-4">
        <ProfilePicture />
        <button onClick={() => setIsOpen((prev) => !prev)}>
          {isOpen && (
            <MdOutlineClose className="transition hover:scale-110 size-6" />
          )}
          {!isOpen && (
            <CiMenuFries className="transition hover:scale-110 size-6" />
          )}
        </button>
        {isOpen && (
          <div className="scale-110 rounded-md fixed top-24 right-6 pl-10 text-lg shadow-lg shadow-zinc-700 pr-2 py-3 transition bg-zinc-100 text-black">
            <div className="flex items-end p-2 gap-y-4 flex-col transition delay-200">
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

      <div className="hidden sm:flex gap-4">
        <div className="flex items-center scale-125 ">
          <Link href="/">
            <Image
              src="/Logo.svg"
              width={60}
              height={60}
              alt="logo"
              className="transition hover:scale-110"
            ></Image>
          </Link>
        </div>
        <div className="flex pl-10 md:pl-12 sm:gap-8 md:gap-16 lg:gap-20 items-center">
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
      <div className="hidden sm:flex gap-6 items-center ">
        <ProfilePicture />
      </div>
    </div>
  );
};

export default Nav;
