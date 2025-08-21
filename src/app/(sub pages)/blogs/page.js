import Image from "next/image";
import bg from "../../../../public/background/Elegant Library-Themed Hallway With Glass Bookshelf And Warm Lighting.png";
import { blogsData } from "../../data";
import dynamic from "next/dynamic";
import { RenderModel } from "@/components/RenderModel";
import BlogList from "@/components/blogs";
import MagicStick from "@/components/models/MagicStick";

export const metadata = {
  title: "Blogs",
};

export default function Blogs() {
  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website's blogs page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
        priority
        sizes="100vw"
      />

      <BlogList blogs={blogsData} />

      <div className="flex items-center justify-center fixed top-16 lg:top-20 -translate-x-1/2 lg:translate-x-0 -z-10 left-1/2 lg:-left-24 h-screen">
        <RenderModel>
          <MagicStick />
        </RenderModel>
      </div>
    </>
  );
}

