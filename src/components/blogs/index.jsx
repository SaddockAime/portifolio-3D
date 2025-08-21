"use client";
import { motion } from "framer-motion";
import BlogLayout from "./BlogLayout";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 1.5,
    },
  },
};

const BlogList = ({ blogs }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full max-w-auto xl:max-w-4xl px-4 mx-auto lg:px-16 space-y-6 md:space-y-8 flex flex-col items-center"
    >
      {blogs.map((blog, index) => {
        return <BlogLayout key={index} {...blog} />;
      })}
    </motion.div>
  );
};

export default BlogList;

