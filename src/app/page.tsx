// "use client";
import Image from "next/image";
import { Inter } from "next/font/google";

import Hero from "@/components/hero/Hero";
import About from "./about/About";
import Nominate from "./nominate/Nominate";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Nominate />
    </main>
  );
}
