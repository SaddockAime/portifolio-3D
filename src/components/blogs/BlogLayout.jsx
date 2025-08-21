"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const BlogLink = motion(Link);

const BlogLayout = ({ id, title, description, date, image, category, readTime }) => {
  return (
    <BlogLink
      variants={item}
      href={`/blogs/${id}`}
      className="text-sm md:text-base flex flex-col md:flex-row items-start md:items-center justify-between w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg hover:scale-105 transition-transform duration-300"
    >
      <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6 w-full">
        {/* Blog Image */}
        <div className="relative w-full md:w-48 h-32 md:h-24 rounded-lg overflow-hidden flex-shrink-0">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 192px"
          />
        </div>
        
        {/* Blog Content */}
        <div className="flex-1 flex flex-col space-y-2">
          <div className="flex items-center space-x-2 text-xs text-muted">
            <span className="px-2 py-1 bg-accent/20 text-accent rounded-full">
              {category}
            </span>
            <span>•</span>
            <span>{readTime}</span>
            <span>•</span>
            <span>{new Date(date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'short', 
              day: 'numeric' 
            })}</span>
          </div>
          
          <h2 className="text-foreground font-semibold text-lg md:text-xl line-clamp-2">
            {title}
          </h2>
          
          <p className="text-muted text-sm md:text-base line-clamp-2 md:line-clamp-1">
            {description}
          </p>
        </div>
      </div>
    </BlogLink>
  );
};

export default BlogLayout;
