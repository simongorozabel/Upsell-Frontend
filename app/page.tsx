"use client";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Product from "./components/Product";
import Steps from "./components/Steps";
import Title from "./components/Title";

export default function Home() {
  return (
    <main
      className="
      
      w-[360px]
    lg:w-[1500px]"
    >
      <Header />
      <Title />
      <Steps />
      <Product />
      <Footer />
    </main>
  );
}
