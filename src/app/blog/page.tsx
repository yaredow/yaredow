import { BlogCard } from "@/components/blog-card";
import { allBlogs } from "contentlayer/generated";
import { Metadata } from "next";
import { generatePageMetadata } from "../seo";

export const metadata = generatePageMetadata({ title: "Blog" });

export default function Blog() {
  const blogs = allBlogs.sort((a, b) => {
    if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
      return -1;
    }
    return 1;
  });

  return (
    <section>
      <h1 className="mb-4 text-2xl font-bold tracking-tighter">Blog.</h1>

      <ul>
        {blogs.map((blog) => (
          <li
            key={blog.slug}
            className="py-4 divide-y divide-gray-200 dark:divide-gray-700"
          >
            <BlogCard blog={blog} />
          </li>
        ))}
      </ul>
    </section>
  );
}
