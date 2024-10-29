"use client";
import Image from "next/image";
import bg from "../../public/background/Moody Historical Alley With Snow-Dusted Cobblestone Path.png";
import { RenderModel } from "@/components/RenderModel";
import Wizard from "@/components/models/Wizard";
import Navigation from "@/components/navigation";
import Coin from "@/components/models/Coin";
import Man from "@/components/models/Man";
import dynamic from "next/dynamic";

const CoinModel = dynamic(() => import("@/components/models/Coin"), {
  ssr: false,
});
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
    <Image src={bg} alt="backround-image" fill className="-z-50 w-full h-full object-cover object-center opacity-50"/>

    <div className="w-full h-screen">
      {/* navigation and 3d model */}
      <Navigation />
      <RenderModel>
        {/* <Wizard /> */}
        <Man />
        {/* <CoinModel /> */}
      </RenderModel>
    </div>
    </main>
  );
}
