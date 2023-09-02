import React from "react";
import Navbar from "../Navabr";

const RootLayout = ({ children }) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="h-screen">

      </main>
      <footer className="bg-gray-900">
        <div className="container mx-auto px-4">
          <h1 className="text-white py-5 text-center text-4xl">This is footer</h1>
        </div>
      </footer>
    </>
  );
};

export default RootLayout;
