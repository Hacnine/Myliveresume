import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900", // Use this only if GeistVF supports these weights
});

const poppins = localFont({
  src: "./fonts/Poppins-Bold.ttf",
  variable: "--font-poppins",
  weight: "400 700", // Adjust if Poppins-Bold only has specific weights
});

export const metadata = {
  title: "My Live Resume",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
