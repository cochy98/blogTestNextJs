import "@/app/globals.css";
import { PropsWithChildren } from "react";
import { PostProvider } from "./context/PostContext";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en">
      <body>
        <PostProvider>
          <Header />

          <main className="max-w-7xl mx-auto">
            {children}
          </main>

          <Footer />
        </PostProvider>
      </body>
    </html>
  );
}
