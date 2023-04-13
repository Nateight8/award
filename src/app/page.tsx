// "use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import SwiperX from "@/components/swiper/SwiperX";
import Hero from "@/components/hero/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="flex min-h-screen flex-col items-center justify-between p-24 bg-black "></div>
    </main>
  );
}
