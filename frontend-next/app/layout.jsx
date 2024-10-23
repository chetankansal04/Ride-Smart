import Nav from "@/components/Nav";
import "./globals.css";
import { Poppins } from "next/font/google"
import { UserProvider } from "@auth0/nextjs-auth0/client";

export const metadata = {
  title: "Ride-Smart App",
  description:
    "App to Check out ride charges across multiple Ride Booking Apps",
};
const poppins = Poppins({
  subsets: ["latin"],
  weight:['400','600']
})
export default function RootLayout({ children }) {

  return (
    <html lang="en" className={poppins.className}>
      <body>
        <UserProvider>
        <Nav></Nav>
        {children}
        </UserProvider>
      </body>
    </html>
  );
}
