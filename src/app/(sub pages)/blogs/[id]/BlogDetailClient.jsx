"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BlogDetailClient({ blog }) {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 lg:px-16 py-8">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="mb-8"
      >
        <Link
          href="/blogs"
          className="inline-flex items-center space-x-2 text-muted hover:text-foreground transition-colors"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span>Back to Blogs</span>
        </Link>
      </motion.div>

      {/* Blog Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mb-8"
      >
        <div className="flex items-center space-x-2 text-sm text-muted mb-4">
          <span className="px-3 py-1 bg-accent/20 text-accent rounded-full">
            {blog.category}
          </span>
          <span>•</span>
          <span>{blog.readTime}</span>
          <span>•</span>
          <span>{new Date(blog.date).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}</span>
        </div>
        
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
          {blog.title}
        </h1>
        
        <p className="text-lg text-muted mb-6 mt-8 p-6 custom-bg rounded-lg border border-accent/20">
          {blog.description}
        </p>
      </motion.div>

      {/* Featured Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9 }}
        className="relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden mb-8"
      >
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
        />
      </motion.div>

      {/* Blog Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
        className="prose prose-invert max-w-none"
      >
        {/* Introduction */}
        <div className="text-lg text-muted leading-relaxed mb-8 mt-8 p-6 custom-bg rounded-lg border border-accent/20">
          {blog.content.intro}
        </div>

        {/* Sections */}
        {blog.content.sections.map((section, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {section.title}
            </h2>
            
            {section.image && (
              <div className="relative w-full h-48 md:h-64 rounded-lg overflow-hidden mb-6">
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
                />
              </div>
            )}
            
            <div className="text-muted leading-relaxed mt-8 p-6 custom-bg rounded-lg border border-accent/20">
              {section.content}
            </div>
          </div>
        ))}

        {/* Conclusion */}
        <div className="text-lg text-muted leading-relaxed mt-8 p-6 custom-bg rounded-lg border border-accent/20">
          {blog.content.conclusion}
        </div>
      </motion.div>
    </div>
  );
}

