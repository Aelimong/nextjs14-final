import { Metadata } from "next";
import Navigation from "../components/navigation";
import "../styles/Global.scss";

export const metadata: Metadata = {
  title: { template: "%s | Aelimong Books", default: "Loading..." },
  description: "The best books in the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
