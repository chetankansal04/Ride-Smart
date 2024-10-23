import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";

const ProfilePicture = () => {
  const { user } = useUser();
  return (
    <div>
      {!user && (
        <a href="/api/auth/login">
          <button className="outline-none transition hover:scale-110 border-2 px-2 py-1 rounded-xl">
            Sign In
          </button>
        </a>
      )}
      {user && (
        <Link href="/profile">
          <img
            src={user?.picture}
            width={50}
            height={50}
            alt={user?.name}
            className="rounded-full hover:scale-110 transition"
          />
        </Link>
      )}
    </div>
  );
};

export default ProfilePicture;
