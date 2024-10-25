import Nav from "@/components/Nav";
import "./globals.css";
import { Poppins } from "next/font/google";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { Providers } from "./providers";
import Head from "next/head";

export const metadata = {
  title: "Ride-Smart App",
  description:
    "App to Check out ride charges across multiple Ride Booking Apps",
};
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <Head>
        <script
          type="text/javascript"
          async src={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_API_KEY}&libraries=places`}
        />
      </Head>
      <body>
        <Providers>
          <UserProvider>
            <Nav></Nav>
            {children}
          </UserProvider>
        </Providers>
      </body>
    </html>
  );
}
