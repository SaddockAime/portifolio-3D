import Image from "next/image";
import bg from "../../../../public/background/Elegant Library-Themed Hallway With Glass Bookshelf And Warm Lighting.png";
import { projectsData } from "../../data";
// import Staff from "@/components/models/Staff";
import dynamic from "next/dynamic";
import { RenderModel } from "@/components/RenderModel";
import ProjectList from "@/components/projects";
import MagicStick from "@/components/models/MagicStick";


// const Staff = dynamic(() => import("@/components/models/Staff"), {
//   ssr: false,
// });

export const metadata = {
  title: "Projects",
};

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website's about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
        priority
        sizes="100vw"
      />

      <ProjectList projects={projectsData} />

      <div className="flex items-center justify-center fixed  top-16  lg:top-20 -translate-x-1/2 lg:translate-x-0 -z-10 left-1/2 lg:-left-24 h-screen">
        <RenderModel>
          {/* <Staff /> */}
          <MagicStick />
        </RenderModel>
      </div>
    </>
  );
}