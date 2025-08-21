import Image from "next/image";
import bg from "../../../../../public/background/Elegant Library-Themed Hallway With Glass Bookshelf And Warm Lighting.png";
import { blogsData } from "../../../data";
import { notFound } from "next/navigation";
import Link from "next/link";
import BlogDetailClient from "./BlogDetailClient";

export async function generateStaticParams() {
  return blogsData.map((blog) => ({
    id: blog.id,
  }));
}

export default function BlogDetail({ params }) {
  const blog = blogsData.find((blog) => blog.id === params.id);

  if (!blog) {
    notFound();
  }

  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website's blog detail page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
        priority
        sizes="100vw"
      />

      <BlogDetailClient blog={blog} />
    </>
  );
}
