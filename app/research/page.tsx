import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";
import React, { Suspense } from "react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import BlogPostsIndex from "@/components/BlogPostsIndex";
import BlogCardSkeleton from "@/components/skeletons/BlogCardSkeleton";

export default async function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const client = createClient();
  const page = await client.getSingle("researchpage");
  const pageNumber = searchParams.page
    ? parseInt(searchParams.page as string, 10)
    : 1;

  console.log("current page number is", pageNumber);

  return (
    <React.Fragment>
      <SliceZone slices={page.data.slices} components={components} />
      <h2 className="mt-6 text-center">Featured Blogs</h2>
      <Suspense
        fallback={
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
            <BlogCardSkeleton />
            <BlogCardSkeleton />
            <BlogCardSkeleton />
            <BlogCardSkeleton />
            <BlogCardSkeleton />
            <BlogCardSkeleton />
          </div>
        }
      >
        <BlogPostsIndex currentPage={pageNumber} />
      </Suspense>
    </React.Fragment>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("researchpage");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
