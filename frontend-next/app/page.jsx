import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-dvh">
      <h1 className="text-3xl font-bold">Welcome to Ride Smart</h1>
      <p className="text-base font-medium">
        Ride sharing app built using Next.js and Spring Boot
      </p>

      <Link href="/dashboard">
        <button className="font-bold rounded-lg border-2 px-2 py-1">
          Dashboard
        </button>
      </Link>
    </div>
  );
}
