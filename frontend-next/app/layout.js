import "./globals.css";

export const metadata = {
  title: "Ride-Smart App",
  description: "App to Check out ride charges across multiple Ride Booking Apps",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
