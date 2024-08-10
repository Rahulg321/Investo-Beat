import { createClient } from "@/prismicio";
import BlogCard from "./BlogCard";
import BlogPagination from "./BlogPagination";
import clsx from "clsx";

export default async function BlogPostsIndex({
  classname,
  currentPage,
}: {
  classname?: string;
  currentPage: number;
}) {
  const client = createClient();
  const blogposts = await client.getByType("blogpost", {
    page: Number(currentPage),
    pageSize: 10,
  });

  return (
    <div className={clsx("container py-6", classname)}>
      <div className="blog-index">
        {blogposts.results.map((post, index) => {
          return (
            <div key={index} className="">
              <BlogCard post={post} classnames="" />
            </div>
          );
        })}
        {blogposts.results.map((post, index) => {
          return (
            <div key={index} className="">
              <BlogCard post={post} classnames="" />
            </div>
          );
        })}
      </div>
      <div className="mt-auto">
        <BlogPagination
          totalPages={blogposts.total_pages}
          currentPage={blogposts.page}
          itemsPerPage={blogposts.results_per_page}
          classname=""
        />
      </div>
    </div>
  );
}
