"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import React from "react";

const Profile = () => {
  const { user } = useUser();

  return (
    user && (
      <div className="flex justify-center mt-48">
        <div className="shadow-lg max-w-fit shadow-black bg-black text-zinc-100 flex flex-col items-center px-4 rounded-xl gap-10 md:gap-14 py-8">
          <div className="flex items-center gap-6 sm:gap-10 md:gap-14">
            <img
              src={user.picture}
              alt={user.name}
              width={80}
              height={80}
              className="scale-110 rounded-full overflow-hidden flex transition hover:scale-110 shadow-lg items-center justify-center"
            ></img>
            {/* User Name */}
            <div className="flex flex-col gap-4">
              <div className="ml-4">
                <h3 className="text-lg font-semibold">{user.name}</h3>
              </div>
              <div className="ml-4">
                <h2 className="text-lg font-medium">{user.email}</h2>
              </div>
            </div>
          </div>
          <a href="/api/auth/logout">
            <button className="bg-red-600 text-xl rounded-xl font-semibold transition hover:bg-red-400 hover:scale-110 shadow-xl text-white px-3 py-2">
              Log Out
            </button>
          </a>
        </div>
      </div>
    )
  );
};

export default Profile;
